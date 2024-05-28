import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function sendPost(
  url: string,
  data: { text: string; s3Key: string; bedrock: boolean }
): Promise<{ status: number; data: string }> {
  try {
    const response = await axios({
      method: "post",
      url: `${API_URL}${url}`,
      data,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error.response?.status || error.status,
      data: error.response,
    };
  }
}

export async function getImage(
  url: string,
  params: { s3Key: string }
): Promise<{ status: number; data: string }> {
  try {
    const response = await axios({
      method: "get",
      url: `${API_URL}${url}`,
      params,
    });

    return {
      status: response.status,
      data: response.data.url,
    };
  } catch (error: any) {
    return {
      status: error.response?.status || error.status,
      data: error.response,
    };
  }
}
