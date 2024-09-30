"use client";
import DropDown from "@/components/DropDown";
import { useEffect, useState } from "react";
import { customSort } from "./utils";

export default function Home() {
  const handleDropDownChange = (data: any) => {
    const selectedValue = data.target.value;
    let sortedFiles;

    if (selectedValue === "createdAtAsc") {
      sortedFiles = [...fileName].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else if (selectedValue === "fileNameAsc") {
      sortedFiles = [...fileName].sort((a, b) =>
        customSort(a.fileName, b.fileName)
      );
    } else if (selectedValue === "fileNameDesc") {
      sortedFiles = [...fileName].sort((a, b) =>
        customSort(b.fileName, a.fileName)
      );
    } else {
      return; // No valid selection
    }

    setFileName(sortedFiles);
  };

  const fetchData = async () => {
    const response = await fetch("/api/readData", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  };

  const [fileName, setFileName] = useState<any>([]);

  useEffect(() => {
    fetchData().then((res) => {
      console.log(res);
      setFileName(res);
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      Sora Union
      <DropDown handleDropDownChange={handleDropDownChange} />
      <div className="flex flex-wrap space-x-2">
        {fileName.length > 0 &&
          fileName.map((item: any, index: any) => (
            <div className="w-1/4 mb-2" key={index}>
              <div className="border border-white bg-black text-white px-10 py-4 rounded-md flex justify-center items-center">
                File Name: {item.fileName} <br />
                Created At: {item.createdAt}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
