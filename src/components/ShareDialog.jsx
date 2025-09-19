import { Fragment, useContext, useState } from "react";
import { Dialog, DialogBody,} from "@material-tailwind/react";
import myContext from "../context/data/myContext";
import { AiOutlineShareAlt, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

export default function ShareDialogBox() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode } = context;

    return (
        <Fragment>
            {/* Share Button */}
            <button
                onClick={handleOpen}
                className=" rounded-full bg-gray-700 hover:border-white transition"
                style={{ background: mode === 'dark' ? 'rgb(30,41,59)' : '#30336b' }}>
                <AiOutlineShareAlt size={20} color="white" />
            </button>

            {/* Dialog Box */}
            <Dialog
                className="w-[25em] sm:w-[30em] md:w-[35em] lg:w-[40em] rounded-lg border-2"
                open={open}
                handler={handleOpen}
            >
                <DialogBody className={`bg-white dark:bg-gray-900 text-black dark:text-white p-6`}>
                    <div className="flex justify-center gap-6 mt-4">
                        {/* LinkedIn Icon */}
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin size={35} className="text-blue-500 hover:opacity-80 transition" />
                        </a>

                        {/* Instagram Icon */}
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram size={35} className="text-pink-500 hover:opacity-80 transition" />
                        </a>

                        {/* GitHub Icon */}
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub size={35} className="text-gray-800 dark:text-white hover:opacity-80 transition" />
                        </a>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-4">
                        <h1 className="text-gray-600 dark:text-gray-400">Powered By <strong>Tech Diva</strong></h1>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}
