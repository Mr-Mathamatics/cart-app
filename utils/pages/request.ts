import axiosClient from "@/lib/axios";

// const request = () => {
//   return {
//     get: async (...request: any) => await axiosClient.get(request),
//     post: async (...request: any) => {
//       console.log(request, "request");
//       return await axiosClient.post(...request);
//     },
//   };
// };
async function get(url: string, ...res: any[]) {
  return await axiosClient.get(url, ...res);
}
async function post(url: string, data: any, ...res: any[]) {
  return await axiosClient.post(url, data, ...res);
}
const request = {
  get,
  post,
};
export default request;
