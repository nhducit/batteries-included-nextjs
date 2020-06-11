[@genType]
type language = {
  languageId: string,
  code: string,
  niceName: string,
};

[@genType]
type user = {
  userId: string,
  name: string,
};
[@genType]
module Decoders = {
  open Json.Decode;

  [@genType]
  let users = json =>
    array(
      json =>
        {
          userId: json |> field("userId", string),
          name: json |> field("name", string),
        },
      json,
    );
};