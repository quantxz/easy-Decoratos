import express from 'express'

export type ExpressType = any & express.Application

export type ServerPortType = number | string;

export type excludeTypes = undefined  & null