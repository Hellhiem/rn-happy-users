import React, { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

type PropsType = {
  children: ReactNode;
};

export const ReactQueryClientProvider = ({ children }: PropsType) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
