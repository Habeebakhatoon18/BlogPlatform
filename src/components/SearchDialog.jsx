import { Fragment, useContext, useState } from "react";
import { Dialog, DialogBody, Input,} from "@material-tailwind/react";
import myContext from "../context/data/myContext";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";

export default function SearchDialog() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode, searchkey,
        setSearchkey, getAllBlog } = context;

    const naviagte = useNavigate();
    return (
        <Fragment>
            {/* Search Icon  */}
            <div onClick={handleOpen}>
                <AiOutlineSearch size={20} color="white" />
            </div>
            {/* Dialog  */}

           <Dialog></Dialog>
            
        </Fragment>
    );
}