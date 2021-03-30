/*
 * @Description:
 * @Author: Friends233
 */
import mongoose = require('mongoose');

/**
 * @description: 生成mongodb的id
 * @param {*}
 * @return {*}
 */
export function newObjecId(): mongoose.Types.ObjectId {
  return new mongoose.Types.ObjectId();
}
