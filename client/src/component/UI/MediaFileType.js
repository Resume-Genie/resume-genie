import cross from "../../assests/svg/dashboard/add-svg.svg";
import jpg from "../../assests/svg/dashboard/jpg.svg";
import png from "../../assests/svg/dashboard/png.svg";
import pdf from "../../assests/svg/dashboard/pdf.svg";
import dft from "../../assests/svg/dashboard/default.svg";

const MediaFileType = (props) => {
  const removeFile = () => {
    props.setFile();
  };

  const name = props.fileName.split(".");
  let img = dft;

  if (name[1] === "jpg") img = jpg;
  if (name[1] === "png") img = png;
  if (name[1] === "pdf") img = pdf;

  const fileSize = Math.ceil(props.fileSize / 1024);

  return (
    <div className="flex items-center justify-between bg-white rounded-md h-[60px] mt-4 p-4 cursor-pointer group">
      <div className="flex items-center">
        <img src={img} alt="" className="w-9 h-9" />
        <div className="ml-8">
          <p>{name[0]}</p>
          <p>
            {fileSize < 1024
              ? fileSize + " KB"
              : Math.round((fileSize / 1024) * 10) / 10 + " MB"}
          </p>
        </div>
      </div>

      <div
        className="rounded-full bg-slate-100 w-10 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all p-1"
        onClick={removeFile}
      >
        <img src={cross} alt="" className="rotate-45" />
      </div>
    </div>
  ); 
};

export default MediaFileType;
