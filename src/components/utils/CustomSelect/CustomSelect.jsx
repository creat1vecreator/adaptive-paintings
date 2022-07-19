import styled from 'styled-components';
import Select from 'react-select';

const CustomSelect = styled(Select).attrs((props) => ({
  ...props,
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: props.theme === 'light' ? 'white' : 'black',
      colorText: props.theme === 'light' ? 'black' : 'white',
      opacity: '1',
      borderRadius: '8px',
      border: props.theme === 'light' ? '1px solid #000000' : '1px solid white',
      padding: '0',
      boxShadow: 'none',
      height: '45px',
      cursor: 'pointer',
      '&:hover': {
        border: props.theme === 'light' ? '1px solid #000000' : '1px solid white',
      },
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: props.theme === 'light' ? 'black' : 'white',
    }),
    option: (provided) => ({
      ...provided,
      cursor: 'pointer',
      color: props.theme === 'light' ? 'black' : 'white',
      backgroundColor: props.theme === 'light' ? '#ffffff' : 'black',
      height: '40px',
    }),

    menu: (provided) => ({
      ...provided,
      borderRadius: '8px',
      background: props.theme === 'light' ? 'white' : 'black',
      border: props.theme === 'light' ? '1px solid #000000' : '1px solid white',

      padding: '1px 4px 1px 2px',
      '& > *': {
        textAlign: 'center',

        '& > *:hover': {
          color: props.theme === 'light' ? 'white' : 'black',
          background: props.theme === 'light' ? 'black' : 'white',
        },
      },
    }),

    menuList: (provided) => ({
      ...provided,
      paddingTop: '0',
      paddingBottom: '0',
      height: '300px',
      paddingLeft: '4px',
      paddingRight: '4px',
    }),
  },
}))`
  height: 45px;
  border: none;
  font-size: 13px;
`;
export default CustomSelect;
