import { ChangeEvent } from "react";
import {Control, FieldErrors, UseFormClearErrors, UseFormHandleSubmit, UseFormSetError} from "react-hook-form";

export type ChangeEventType = (_event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, data: any) => void

export interface IReturnPropForm {
    onValueChange: (_event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, data: InputEvent) => void,
    handleSubmit: UseFormHandleSubmit<Record<string, any>>,
    clearErrors: UseFormClearErrors<Record<string, any>>,
    setError: UseFormSetError<Record<string, any>>,
    control: Control<Record<string, any>>,
    errors?: FieldErrors<Record<string, any>>,
    isSubmitting: boolean,
    onSubmit: (value: Record<string, unknown>) => void,
}
