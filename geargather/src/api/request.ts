import axios from "axios";

export interface ApiResponse {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface ApiError {
  localizedMessage: string;
  statusCode?: number;
  errorCode?: number;
  config?: any;
}

const request = async function (
  options: any,
  isAuthenticated = true,
  isMultipartFormData = false
) {
  type Header = {
    "Content-Type"?: string | undefined;
    Authorization?: string;
  };

  let header: Header = {
    "Content-Type": isMultipartFormData
      ? "multipart/form-data"
      : "application/JSON",
  };
  

  if (isAuthenticated) {
    let token = localStorage.getItem("accessToken");
    //console.log(token);
    header["Authorization"] = `Bearer ${token}`;
  }

  const client = axios.create({
    baseURL: "http://localhost:1337/api/",
    headers: header,
  });

  const onSucces = (response: any) => {
    return response;
  };
  const onError = (error: any) => {
    
    const errorKey =
      error.response?.data?.error?.localized_error || error.message;
   

    const apiError: ApiError = {
      localizedMessage: errorKey,
      statusCode: error.response.status,
      errorCode: error.response?.data?.error?.code,
      config: error.config,
    };


    return Promise.reject(apiError);
  };

  return client(options).then(onSucces).catch(onError);
};

export default request;
