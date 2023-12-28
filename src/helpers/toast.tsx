
import { toast } from "react-toastify";
import ToastSuccess from '@/components/Toast/success'
import ToastError from '@/components/Toast/error'
import ToastWarning from '@/components/Toast/warning'
import ToastPending from '@/components/Toast/pending'
import CloseButton from "@/components/Toast/close-button";

const g_style = {
  padding: 0,
  borderRadius: '12px',
}

const g_options = {
  progressStyle: {
    height: '4px',
    background: '#fff',
  }
}

export const optionsSuccess = {
  style: {
    ...g_style,
    border: '1px solid rgba(89, 210, 115, 1)',
    background: 'linear-gradient(202deg, #7CFF98 0%, #000000 100%)'
  },
  closeButton: <CloseButton />
}

export const toastSuccess = (title?: string) => {
  return toast(<ToastSuccess title={title} />, { ...g_options, ...optionsSuccess })
}

export const optionsError = {
  style: {
    ...g_style,
    border: '1px solid #F35A58',
    background: 'linear-gradient(202deg, #F35A58 0%, #000000 100%)'
  },
  closeButton: <CloseButton />
}

export const toastError = (title?: string) => {
  return toast(<ToastError title={title} />, { ...g_options, ...optionsError })
}

export const optionsWarning = {
  style: {
    ...g_style,
    border: '1px solid #FFD479',
    background: 'linear-gradient(202deg, #FFD479 0%, #000000 100%)'
  },
  closeButton: <CloseButton />
}

export const toastWarning = (title?: string) => {
  return toast(<ToastWarning title={title} />, { ...g_options, ...optionsWarning })
}

export const optionsPending = {
  style: {
    ...g_style,
    border: '1px solid #ffffff',
    background: 'linear-gradient(202deg, #ffffff 0%, #000000 100%)'
  },
  closeButton: <CloseButton />
}

export const toastPending = (title?: string) => {

  return toast(<ToastPending title={title} />, { ...g_options, ...optionsPending, autoClose: false })
}

export const toastUpdateSuccess = (loading: any, title?: string) => {
  toast.update(
    loading,
    { render: <ToastSuccess title={title} />, ...g_options, ...optionsSuccess, autoClose: 5000 },
  );
}

export const toastUpdateError = (loading: any, title?: string) => {
  toast.update(
    loading,
    { render: <ToastError title={title} />, ...g_options, ...optionsError, autoClose: 5000 },
  );
}

export const toastUpdateWarning = (loading: any, title?: string) => {
  toast.update(
    loading,
    { render: <ToastWarning title={title} />, ...g_options, ...optionsWarning, autoClose: 5000 },
  );
}