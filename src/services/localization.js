export const getLocalizedPath = (path, language) => {
  if (language === "ar") {
    return `/ar${path}`;
  } else {
    return path;
  }
};