import { useState , memo, useMemo} from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import dataList from "./contents/data";

function Result(){
    const { id } = useParams();

    return (
        <div> {dataList[id].value}</div>
    );
}

export default Result;