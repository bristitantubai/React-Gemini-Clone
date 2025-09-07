function RecentSearch({recentHistory, setRecentHistory, setSelectedHistory}) {

  const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };

  const clearSelectedHistory =(selectedItem)=>{
        let history = JSON.parse(localStorage.getItem('history'));
        history = history.filter((item) =>{
                    console.log(item);
                    if(item!=selectedItem) {
                        return item
                    }
        })

        setRecentHistory(history);
        localStorage.setItem('history',JSON.stringify(history));
        
  }

  return (
    <>
      <div className="col-span-1 dark:bg-zinc-800 bg-zinc-200 shadow">
        <h1 className="text-xl dark:text-white text-zinc-800 pt-3 flex justify-center">
          <span>Recent Search</span>
          <button onClick={clearHistory} className="cursor-pointer ml-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-zinc-700 dark:fill-zinc-400 hover:dark:fill-zinc-200"
            >
              <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
            </svg>
          </button>
        </h1>
        <ul className="text-left overflow-auto pt-3 mx-3">
          {recentHistory &&
            recentHistory.map((item,index) => (
              <div key={index} className="flex justify-between"> 
                <li
                    onClick={() => setSelectedHistory(item)}
                    className="p-1 pl-5 w-full truncate rounded-md text-zinc-500 dark:text-zinc-400 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:text-zinc-800"
                >
                    {item}
                </li>
                <button onClick={()=>clearSelectedHistory(item)} className="cursor-pointer ml-1 m-1 rounded hover:bg-zinc-50  dark:hover:bg-zinc-900 dark:bg-zinc-700 bg-zinc-300">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-700 dark:hover:fill-zinc-100"
                    >
                    <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                    </svg>
                </button>
              </div> 
            ))}
        </ul>
      </div>
    </>
  );
}

export default RecentSearch;
