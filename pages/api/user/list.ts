import { $ } from 'helpers/auth';
import list from 'helpers/api/list.api.helper';

import User from 'models/user.model';


export default list(User, $.VIEW_USERS);
