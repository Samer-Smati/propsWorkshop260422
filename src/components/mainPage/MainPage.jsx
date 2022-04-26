import React from 'react'

import CustomInput from '../ui/Input/CustomInput'
import CustomCard from '../ui/Card/CustomCard'
import CustomBtn from '../ui/Button/CustomBtn'
import {Row} from 'react-bootstrap'
import {data} from '../../data'

function MainPage() {
  return (
    <div>
        <CustomBtn variant='outline-danger' className='outline-primary' label="this is label" />
      <CustomBtn variant='outline-primary' text_inside_btn="this is btn" />
      <Row xs={1} md={2} className="g-4"> 
        {data?.map(el =>
          <CustomCard mycustomdata={el} /> 
        )}
      </Row>
      <CustomInput className="me-2 form-control" type="text" placeholder="Put your name"  label="UserName" />
    </div>
  )
}

export default MainPage