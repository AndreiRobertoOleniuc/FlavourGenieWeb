export * from './grocery.service';
import { GroceryService } from './grocery.service';
export * from './token.service';
import { TokenService } from './token.service';
export const APIS = [GroceryService, TokenService];
