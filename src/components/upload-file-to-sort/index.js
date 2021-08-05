import Api from "../../api";
const FileDownload = require('js-file-download');

const UploadFileToSort = (props) => {

    const handleFileInputChange = (event) => {
        if (event.target.files.length) {
            const selectedFile = event.target.files[0];

            Api.soldItems.manualSort(selectedFile).then((data) => {
                FileDownload(data, 'sorted.zip');
            });
        }
    };

    return (
        <label>
            <input type="file" hidden onChange={handleFileInputChange}/>
            {props.children}
        </label>
    )
}

export default UploadFileToSort;