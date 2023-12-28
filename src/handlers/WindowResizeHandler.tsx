import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTop, setWidth, setHeight } from "@/store/actions/windowAction";
import { RootState } from "@/store/types";

const WindowResizeHandler = () => {
  const dispatch = useDispatch();
  const { width, top } = useSelector((state: RootState) => state?.window);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      dispatch(setWidth(Number(newWidth)) as any);

      const newHeight = window.innerHeight;
      dispatch(setHeight(Number(newHeight)) as any);
    };

    if (width === 0) {
      dispatch(setWidth(Number(window.innerWidth)) as any);
      dispatch(setHeight(Number(window.innerHeight)) as any);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || window.pageYOffset;
      dispatch(setTop(Number(currentScrollTop)) as any);
    };

    if (top === -1) {
      dispatch(setWidth(Number(window.scrollY || window.pageYOffset)) as any);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default WindowResizeHandler;
