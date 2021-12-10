# Happy Users App

## <u>How to run project</u>

### Run project:

```sh
yarn start
```

Command will install all libraries using the `yarn`, install Pods with `pod install` command in `ios` directory and run the bundler

```sh
yarn just-start
```

Command will just run the bundler via `react-native start`

```sh
yarn sanity
```

Command will perform all needed tests (TypeScript check, jest and eslint rules) that has to be `green` before pushing the code. (good to add as `pre-commit` command)

```sh
yarn test
```

Command will run tests and update snapshots if needed.

```sh
yarn lint:fix
```

Command will fix all eslint problems for you.. well... most of it :smile:

## <u>Mac's with M1</u>

### Android

There should be no issues with android devices

### iOS

Podfile contain proper post install script for Mac's with M1 chip but if there are some problems with build please switch Xcode to `Run with Rosetta` mode.

<b>`How to run xcode with rosetta:`</b>

Right click on Xcode -> Get Info -> Check `Run with Rosetta` -> restart xcode if running.

## <u>Naming convention</u>

All variable, function, objects etc. names should be self described. It means that we use whole words/sentences that can describe the code, for example:

```js
const authenticateUser = (email, password, callback) => {
  signIn(email, password);
  callback();
};
```

Instead of:

```js
const authUsr = (em, pass, cb) => {
  signIn(em, pass);
  cb();
};
```

## Imports

Barrel imports (from index file) are also utilised in the project.
Also, thanks to metro bundler, we can easily create absolute imports within the project.
Use it at your advantage, for example:

```
import { FullScreenTemplate, StyledText } from 'components';
```

instead of:

```
import { FullScreenTemplate } from '../../components/FullScreenTemplate';
import { StyledText } from '../../components/StyledText';
```

Make sure not to create circular dependencies.

## <u>Project structure</u>

- `src` -> is a main app folder
- - `assets` -> contains all images, fonts, used across the app
- - `components` -> contains all reusable components used across the app. Structure example:
- - - - `component/Button/index.tsx` - Source code
- - - - `component/Button/__tests__/Button.(test | e2e).tsx` - Unit tests/E2E tests
- - - - `component/Button/__stories__/Button.stories.tsx` - Storybook stories
- - - This will help us store all data for components in one folder to not search them in 3 different places
- - `config` -> contains all configurations for the project ex. translations, style guide, environment variables
- - `lib` -> contains all the helper functions, custom hooks, validators that are used across the app. Example structure: `lib/validators`, `lib/hooks` -> `lib/index.ts` main file that everything is exported so import would be: `import { useUserApi } from 'lib';` from all places
- - `screens` -> contain all navigation screens that can be displayed to the user
- - `services` -> contain all services that fetch specific data
- - `types` -> contain all the types used across the app, every single folder mirrors the main app folder ex. `config` can contain `ThemeType`, `ColorTypes` and other types that are related to main `config` folder contents.

All modules are exported in `index.ts` to make the code cleaner and have a single place of import. ex. Every module contained in `types` folder is exported inside one parent `index.ts`.

This `import/export` method is called `Barrel` to read more about it: [Barrel Method Documentation](https://basarat.gitbook.io/typescript/main-1/barrel)

## <u>Known Hacks</u>

- `HomeScreen` line `35` is a little hack to see the press out animation that is triggered in `UserDetailsPopup`
