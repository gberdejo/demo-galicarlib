import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly redisClient: Redis;

  constructor() {
    this.redisClient = new Redis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    });
  }

  async get(key: string): Promise<object | null> {
    const raw = await this.redisClient.get(key);
    return raw ? JSON.parse(raw) : raw;
  }

  async set(key: string, value: object, ttlSeconds: number): Promise<'OK'> {
    return this.redisClient.set(key, JSON.stringify(value), 'EX', ttlSeconds);
  }

  async del(key: string): Promise<number> {
    return this.redisClient.del(key);
  }
}
