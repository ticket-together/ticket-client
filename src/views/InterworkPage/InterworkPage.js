import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutoComplete, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const InterworkPage = () => {
  const navigate = useNavigate();

  const ButtonStyle = useMemo (() => ({
    width : '200px',
    margin : 'auto',
    display : 'block',
    //padding : '70px',
    marginTop : '30px',
  }), [])

  const sites = [
    {
      name : 'interpark',
      id : '1',
    },
    {
      name : 'yes24',
      id : '2',
    },
    {
      name : 'melon',
      id : '3',
    },
  ];
   
  return (
    <>
      <h1 onClick={() => navigate('/')} style={{textAlign : 'center', cursor : 'pointer', marginTop :'30px'}} >Ticket Together</h1>
      {sites.map((site, idx) => (
        <>
          <Tooltip title={site.name}>
            <Button
            shape="round"
            icon={<SearchOutlined />}
            size="large"
            style={ButtonStyle}
            danger
            key={idx}
            onClick={() => navigate('/external/' + site.id)}
            > {site.name} </Button>
          </Tooltip>
        </>
      ))}
    </>
  );

}

export default InterworkPage;