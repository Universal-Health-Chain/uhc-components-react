interface ITheme {
  color: {
    black: string;
    white: string;
    gray: string;
    primary: string;
    secondary: string;
    dangerPrimary: string;
    dangerSecondary: string;
  };
}

let theme: ITheme = {
  color: {
    black: "#313639",
    white: "#FFFFFF",
    gray: "#999999",
    primary: "#66cc66",
    secondary: "#33a8d5",
    dangerPrimary: "#D9984F",
    dangerSecondary: "#D9534F",
  },
};

export const setPrimaryColor = (color: string) => {
  theme.color.primary = color;
};

export const setSecondaryColor = (color: string) => {
  theme.color.secondary = color;
};

export default theme;
