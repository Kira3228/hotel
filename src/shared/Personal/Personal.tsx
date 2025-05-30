import { Button, Card, Input } from "@mui/joy"
import { useState } from "react"
type TUpdatePerson = {
    firstName: string
    lastName: string
    middleName: string
    phone: string
    email: string
}
export const Personal: React.FC = () => {
    const [updateData, setUpdateData] = useState<TUpdatePerson>({
        firstName: '',
        email: '',
        lastName: '',
        middleName: '',
        phone: ''
    })
    const [isDisable, setIsDisable] = useState<boolean>(true);
    /* 
    Добавить fetch для вывода данных для изменения    
    */
    const updateSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsDisable(true)
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUpdateData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const cancelHandler = () => {
        setIsDisable(true)
        setUpdateData({
            firstName: '',
            email: '',
            lastName: '',
            middleName: '',
            phone: ''
        })
    }
    return (<>
        <Card>
            <form onSubmit={updateSubmit} >
                <Input
                    name="firstName"
                    onChange={changeHandler}
                    disabled={isDisable}
                    value={updateData.firstName}
                    placeholder="Имя"
                />
                <Input
                    name="lastName"
                    onChange={changeHandler}
                    disabled={isDisable}
                    value={updateData.lastName}
                    placeholder="Фамилия"
                />
                <Input
                    name="middleName"
                    onChange={changeHandler}
                    disabled={isDisable}
                    value={updateData.middleName}
                    placeholder="Отчество"
                />
                <Input
                    name="phone"
                    onChange={changeHandler}
                    disabled={isDisable}
                    value={updateData.phone}
                    placeholder="Номер телефона"
                />
                <Input
                    name="email"
                    onChange={changeHandler}
                    disabled={isDisable}
                    value={updateData.email}
                    placeholder="Почта"
                    type="email"
                />
                <Button disabled={!isDisable} onClick={() => { setIsDisable(false) }}>Редактировать</Button>
                <Button type="submit" disabled={isDisable}>Сохранить</Button>
                <Button onClick={cancelHandler} disabled={isDisable}>Отменить изменения</Button>
            </form>
        </Card>
    </>)
}