export const numberProps = ({
  name: "nubmer",
  rules: {
    required: {
      value: true,
      message: "Это обязательное поле"
    },
    maxLength: {
      value: 20,
      message: 'Количество символов не должно превышать 20.'
    }
  },
})

export const requiredProps = ({
  name: "text",
  rules: {
    required: {
      value: true,
      message: "Это обязательное поле"
    }
  },
})