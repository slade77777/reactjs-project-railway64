import {useEffect, useState} from "react";

const useFetchData = (functionGet: (param: any) => Promise<any>, param: any) => {
  const [data, setData] = useState<any>();

  function getData() {
    functionGet(param).then((response) => {
      setData(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return { data }
}

export default useFetchData;
