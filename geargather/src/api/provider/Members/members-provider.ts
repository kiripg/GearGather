import request from "../../request";

export function membersAPI() {
  return request(
    {
      url: "members",
      method: "GET",
    },
    true
  );
}

export function addMembersAPI(data: any) {

  return request(
    {
      url: "members",
      method: "POST",
      data: data,
    },
    true
  );
}

export function updateMembersApi(data: any) {
  return request(
    {
      url: `members/${data.data.id}`,
      method: "PUT",
      data: data.data,
    },
    true
  );
}
