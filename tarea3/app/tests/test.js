import { suma, resta, multiplica, divide } from "../utils/utils";
import request from 'supertest';
import app from '../../index'

describe('Calculator functions', () => {
    test('suma adds two numbers correctly', () => {
        expect(suma(2, 3)).toBe(5);
        expect(suma(-1, 1)).toBe(0);
        expect(suma(0, 0)).toBe(0);
    });

    test('resta subtracts two numbers correctly', () => {
        expect(resta(5, 3)).toBe(2);
        expect(resta(1, 1)).toBe(0);
        expect(resta(0, 5)).toBe(-5);
    });

    test('multiplica multiplies two numbers correctly', () => {
        expect(multiplica(2, 3)).toBe(6);
        expect(multiplica(-2, 3)).toBe(-6);
        expect(multiplica(0, 5)).toBe(0);
    });

    test('divide divides two numbers correctly', () => {
        expect(divide(6, 2)).toBe(3);
        expect(divide(0, 5)).toBe(0);
        expect(divide(5, 0)).toBe(null);
    });
});

describe('Pruebas del router de ejemplo', () => {
  test('GET /api/admin debe responder con { mensaje: "ok" }', async () => {
    const res = await request(app).get('/api/admin');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ mensaje: 'ok' });
  });

  test('GET /api/ debe responder con { mensaje: "ok" }', async () => {
    const res = await request(app).get('/api/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ mensaje: 'ok' });
  });
});