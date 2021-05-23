export const maxCharactersRule = (field: string, characters: number) => {
  return (v: string | undefined): boolean | string =>
    v ? v.length <= characters || `${field} must be less than ${characters} characters` : true;
};

export const requiredRule = (field: string) => {
  return (v: any): boolean | string => !!v || `${field} field is mandatory`;
};
