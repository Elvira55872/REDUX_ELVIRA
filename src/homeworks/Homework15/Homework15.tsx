import { useState } from "react"
import { useFormik } from "formik"

import Button from "components/Button/Button"
import Counter from "components/Counter/Counter"
import Input from "components/Input/Input"

import { VegiCountFormWrapper } from "./styles"

function Homework15() {
  const [value, setvalue] = useState<number>(0)

  const onPlus = (): void => {
    setvalue((prevValue: number) => {
      return prevValue + 1
    })
  }

  const onMinus = (): void => {
    setvalue((prevValue: number) => {
      return prevValue - 1
    })
  }

  // хотела попробовать сделать вывод данных в консоль из инпута и цифру из counter
  // но из counter почему то не удается получить число
  // это я сама себе задание придумала 😅 , можешь ничего не отвечать на это 
  // наверное так просто нельзя делать и нужно сделать инпут с числом, а не counter 
  const formik = useFormik({
    initialValues: {
      vegiType: "",
      vegiCount: 0,
    },
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
    <VegiCountFormWrapper onSubmit={formik.handleSubmit}>
      <Input
        id="vegi"
        name="vegiType"
        label="Vegetable type"
        placeholder="tomatoe"
        value={formik.values.vegiType}
        onChange={formik.handleChange}
      />
      <Counter
        count={value}
        onPlus={onPlus}
        onMinus={onMinus}
      />
      <Button name="Send" type="submit" />
    </VegiCountFormWrapper>
  )
}

export default Homework15
