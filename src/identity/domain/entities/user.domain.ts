import { v4 as uuidv4 } from 'uuid';
import { Role } from './role.domain';
import { Token } from './token.domain';
import { Credential } from './credential.value-object';

export class User {
  readonly id: string;
  username: string;
  roles: Role[] = [];
  credential: Credential | null = null;
  tokens: Token[] = [];

  constructor(props: {
    id?: string;
    username: string;
    roles?: Role[];
    credential?: Credential;
    tokens?: Token[];
  }) {
    this.id = props.id ?? uuidv4();
    this.username = props.username;
    if (props.roles) this.roles = props.roles;
    if (props.credential) this.credential = props.credential;
    if (props.tokens) this.tokens = props.tokens;
  }

  hasPermission(action: string, resource: string): boolean {
    return this.roles.some((role) =>
      role.permissions.some(
        (perm) => perm.action === action && perm.resource === resource,
      ),
    );
  }

  addToken(token: Token) {
    this.tokens.push(token);
  }

  assignRole(role: Role) {
    if (!this.roles.find((r) => r.name === role.name)) {
      this.roles.push(role);
    }
  }
}
