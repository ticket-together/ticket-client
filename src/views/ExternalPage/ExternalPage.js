import React, { useMemo }from 'react';
import { Button, Input, Form } from 'antd';
import { useParams, useNavigate,  useState } from 'react-router';
import { SnippetsTwoTone } from '@ant-design/icons';


const ExternalPage = () => {

  const { showId } = useParams();
  const navigate = useNavigate();


  return (
    <h1 onClick={() => navigate('/')} style={{textAlign : 'center', cursor : 'pointer'}} >Ticket Together {site.name}</h1>
  )
};

export default ExternalPage;