import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Web3Storage } from "web3.storage";
import abi from "../ABI/abi.json";
export default function CreatePost() {
  const contractAddress = "0x5285Dd9A394006b4A1dfa4471b7551d34610b119";
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const appContract = new ethers.Contract(contractAddress, abi, signer);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImg] = useState(null);
  const [imgCid, setImgCid] = useState(null);
  const [Post, setPost] = useState({
    text: "",
    imgCid: "",
  });
  function makeStorageClient() {
    return new Web3Storage({ token: process.env.REACT_APP_WEB3_KEY });
  }
  async function storeFiles(files, stateName) {
    const client = makeStorageClient();

    const cid = await client.put(files);
    stateName(cid);
    console.log("stored files with cid:", cid);
    return cid;
  }

  var cids;
  function handleData() {
    if (img) {
      cids = storeFiles(img, setImgCid);
    }
  }
  useEffect(() => {
    if (imgCid) {
      setPost({ ...Post, imgCid: imgCid });
    }
    try {
      appContract.viewContent();
      appContract.viewContent(function (err, data) {
        if (!err) console.log(data);
      });
    } catch {
      console.log("error");
    }
  }, [imgCid]);

  return (
    <>
      <Button onClick={onOpen}>Create a Post</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="Here is a sample placeholder"
              mb={"10px"}
              onChange={(e) => {
                setPost({ ...Post, text: e.target.value });
              }}
              value={Post.text}
            />
            {/* <FileUploader
              handleChange={(e) => {
                setImg(e.target.files);
              }}
              name="file"
            /> */}
            {console.log(Post)}
            <input
              type="file"
              onChange={(e) => {
                setImg(e.target.files);
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleData}>
              Create
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
