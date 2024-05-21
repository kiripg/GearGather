import request from "../../request";

export function treasuryAPI() {
  return request(
    {
      url: "treasuries",
      method: "GET",
    },
    true
  );
}

export function addTreasuryApi(data: any) {
  return request(
    {
      url: "treasuries",
      method: "POST",
      data: data,
    },
    true
  );
}

export function updateTreasury(data: any) {
  return request(
    {
      url: `treasuries/${data.data.id}`,
      method: "PUT",
      data: data.data,
    },
    true
  );
}

export function deleteTreasuryApi(id: number) {
  return request(
    {
      url: `treasuries/${id}`,
      method: "DELETE",
    },
    true
  );
}
