import { fabric } from 'fabric';
export enum DrawingColours {
  BLACK = 'rgba(0,0,0,1)',
  WHITE = 'rgba(255,255,255,1)',
  RED = 'rgba(255,0,0,1)',
  GREEN = 'rgba(0,255,0,1)',
  BLUE = 'rgba(0,0,255,1)',
  YELLOW = 'rgba(255,255,0,1)',
}

export enum DrawingThickness {
  THIN = 1,
  MEDIUM = 3,
  THICK = 5,
}

export enum DrawingTools {
  SELECT = 'SELECT',
  ERASER = 'ERASER',
  IMAGE = 'IMAGE',
  RECTANGLE = 'RECTANGLE',
  PENCIL = 'PENCIL',
  LINE = 'LINE',
  DASHED_LINE = 'DASHED_LINE',
  FILL = 'FILL',
  GARBAGE = 'GARBAGE',
  SAVE = 'SAVE',
}

export interface Pointer {
  x: number;
  y: number;
}

interface CustomFabricProps {
  id: string;
}
export type CustomFabricObject = fabric.Object & CustomFabricProps;
export type CustomFabricRect = fabric.Rect & CustomFabricProps;
export type CustomFabricLine = fabric.Line & CustomFabricProps;
export type CustomFabricPath = fabric.Path & { id: string };
export type CustomFabricImage = fabric.Image & CustomFabricProps;

export enum FabricObjectType {
  RECT = 'rect',
  IMAGE = 'image',
  LINE = 'line',
  POLYGON = 'polygon',
  PATH = 'path',
}
