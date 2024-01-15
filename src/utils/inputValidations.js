export const text_validation = {
    nameId: 'text',
    label: 'Text',
    type: 'text',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'requerido',
      },
      maxLength: {
        value: 30,
        message: 'max: 30 caracteres',
      },
    }
  }
  
  export const area_validation = {
    nameId: 'area',
    label: 'Area',
    multiline: true,
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'requerido',
      },
      maxLength: {
        value: 200,
        message: 'max: 200 caracteres',
      },
    },
  }
  
  export const password_validation = {
    nameId: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'requerido',
      },
      minLength: {
        value: 6,
        message: 'min: 6 caracteres',
      },
    },
  }
  
  export const num_validation = {
    nameId: 'num',
    label: 'Num',
    type: 'number',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'requerido',
      },
      pattern: {
        value:
        /\d+/,
        message: 'sólo números',
      },
    },
  }
  
  export const email_validation = {
    nameId: 'email',
    label: 'Email',
    type: 'email',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'requerido',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'email invalido',
      },
    },
  }
  
  export const select_validation = {
    nameId: 'select',
    label: 'Select',
    type: 'select',
    placeholder: '',
    onChangeFunc: ()=>{},
    validation: {
      required: {
        value: true,
        message: 'requerido',
      },
      pattern: {
        value:
        /\d+/,
        message: 'requerido',
      },
    },
    combos: [],
  }

  export const date_validation = {
    nameId: 'date',
    label: 'Date',
    type: 'date',
    validation: {
      required: {
        value: true,
        message: 'requerido',
      },
    },
  }

  export const file_validation = {
    nameId: 'file',
    label: 'File',
    type: 'file',
    validation: {
      required: {
        value: true,
        message: 'requerido',
      },
    },
  }