import { Web3Storage } from "web3.storage";

export const makeStorageClient = () =>
  new Web3Storage({
    token:
      process.env.WEB3STORAGE_TOKEN ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgzNzA0NjkzNjQwMWNiQTBlOGE5YjE4YmRmN2UyNzQxMzZiNzk1MjMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQ5NDg5OTMxMjAsIm5hbWUiOiJCbG9ja0hlYWRzIn0.uH99TOGm_zhlh7fFXZGDoNYFsQ_fmXFtFhRsrkWjQD8",
  });

export const storeFiles = async (files) => {
  const client = await makeStorageClient();
  const cid = await client.put(files);
  console.log("stored file with cid:", cid);
  return cid;
};

export const getFiles = async (cid) => {
  const client = await makeStorageClient();
  const res = await client.get(cid);
  if (!res.ok)
    throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`);
  const files = await res.files();
  console.log("got files:", files);
  return files;
};

const imagesDataUrl = "https://dweb.link/api/v0/ls?arg=";
const ipfsUrl = "https://ipfs.io/ipfs/";

export const getImageLinks = async (cid) => {
  const url = imagesDataUrl + cid;
  const response = await (await fetch(url)).json();
  const data = response.Objects[0].Links.map(
    (image) => ipfsUrl + cid + "/" + image.Name
  );
  return data;
};
