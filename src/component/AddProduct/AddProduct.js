import { useEffect, useState } from "react";
import "./addProduct.css";
import { addDoc, collection } from "firebase/firestore";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { dataBase, storage } from "../../config/Friebase";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [toogle, setToogle] = useState(false);
  const [progress, setProgress] = useState(0);
  const collectionRef = collection(dataBase, "products");

  useEffect(() => {
    if (file) {
      const imageName = file.name;
      const imgRef = ref(storage, `images/${imageName}`);
      const uploadTask = uploadBytesResumable(imgRef, file);
      setToogle(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error("Upload error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
          });
        }
      );
    }
  }, [file]);

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collectionRef, { name: name, price: price, image: url });
      setToogle(true);
      setName("");
      setPrice("");
      setFile(null);
      setUrl("");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="file"
          placeholder="Add Image"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        {toogle && <progress value={progress} max="100" />}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
