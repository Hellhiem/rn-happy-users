import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { BaseContainer, BasicHeader, LoadingIndicator, UserDetailsPopup, UserTile } from 'components';
import { i18n } from 'config/translations';
import { formatUserDateOfBirth } from 'lib/helpers';
import { AlertService } from 'lib/services';
import { useMutation } from 'react-query';
import { getUsersService } from 'services/user';
import styled from 'styled-components/native';
import { UserType } from 'types';

const baseTranslationPath = 'Screens:HomeScreen:';

const Container = styled(BaseContainer)`
  padding-vertical: 16px;
`;

const TouchableUserItem = styled.Pressable`
  margin-bottom: 16px;
`;

export const HomeScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersData, setUsersData] = useState<UserType[] | []>([]);
  const [selectedUserData, setSelectedUserData] = useState<UserType | null>(null);
  const [isUserDetailsVisible, setIsUserDetailsVisible] = useState(false);

  const fetchUsersMutation = useMutation((page: number) => getUsersService(page), {
    onSuccess: (data) => {
      setUsersData((prevState) => [...prevState, ...data.results]);
    },
    onError: (error: Error) => {
      AlertService.show(error.message);
    },
  });

  const displayUserDetails = (userData: UserType) => {
    setSelectedUserData(userData);
    setIsUserDetailsVisible(true);
  };

  const dismissUserDetails = () => {
    setIsUserDetailsVisible(false);
    setTimeout(() => {
      setSelectedUserData(null);
    }, 200);
  };

  const renderItem: ListRenderItem<UserType> = ({ item }) => {
    const userName = `${item.name.first} ${item.name.last}`;

    return (
      <TouchableUserItem onLongPress={() => displayUserDetails(item)} onPressOut={dismissUserDetails}>
        <UserTile userName={userName} phoneNumber={item.cell} userImageUrl={item.picture.medium} />
      </TouchableUserItem>
    );
  };

  const renderFooterComponent = () => {
    return fetchUsersMutation.isLoading ? <LoadingIndicator /> : undefined;
  };

  const onEndReached = () => {
    fetchUsersMutation.mutate(currentPage + 1);
    setCurrentPage((prevState) => prevState + 1);
  };

  const getKeyExtractor = (item: UserType) => {
    return item.email;
  };

  useEffect(() => {
    fetchUsersMutation.mutate(1);
  }, []);

  return (
    <Container>
      <FlatList
        data={usersData}
        renderItem={renderItem}
        ListFooterComponent={renderFooterComponent()}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        keyExtractor={getKeyExtractor}
      />
      {selectedUserData && (
        <UserDetailsPopup
          isVisible={isUserDetailsVisible}
          email={selectedUserData?.email}
          dateOfBirth={formatUserDateOfBirth(selectedUserData?.dob.date)}
          gender={selectedUserData?.gender}
          city={selectedUserData?.location.city}
          coordinates={selectedUserData?.location.coordinates}
        />
      )}
    </Container>
  );
};

export const homeScreenOptions = () => {
  const header = () => <BasicHeader title={i18n.t(`${baseTranslationPath}headerTitle`)} />;

  return {
    header,
  };
};
