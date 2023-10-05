function Download({dataurl, filename}) {
    
    function download(url, filename) {
        console.log(url);
        fetch(url)
          .then(response => response.blob())
          .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
        })
        .catch(console.error);
      }

    return (
        <button onClick={()=> download(dataurl, filename)}>
            download
        </button>
    )
  }

  export default Download

