import React, { useState, useEffect } from 'react';
import HistoryLogUI from "@/my/history/ui/HistoryLogUI";
import { get } from "@/utils/http";

function HistoryLog(props) {

  const [historyList, setHistoryList] = useState(null)

  useEffect(() => {
    (async () => {
      let result = await get("/api/article/record/select")
      setHistoryList(result.data.data.rows)
    })()
  }, [])

  return (
    historyList && <HistoryLogUI historyList={historyList}/>
  );
}

export default HistoryLog;