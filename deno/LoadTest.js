import http from 'k6/http';
import { sleep, check } from 'k6';

const endpoint = 'http://192.168.1.12:8001/';

const stages = [
    { duration: '1m', target: 1 },
    { duration: '1m', target: 100 },
    { duration: '1m', target: 200 },
    { duration: '1m', target: 300 },
    { duration: '1m', target: 400 },
    { duration: '1m', target: 500 },
    { duration: '1m', target: 600 },
    { duration: '1m', target: 700 },
    { duration: '1m', target: 800 },
    { duration: '1m', target: 900 },
    { duration: '1m', target: 1000 },
];

export const options = {
    stages: stages,
};

export default function () {
    let res = http.get(endpoint);
    
    check(res, { 'status was 200': (r) => r.status === 200 });
    
    sleep(1);
}