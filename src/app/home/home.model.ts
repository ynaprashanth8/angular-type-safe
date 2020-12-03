import { FormGroupTypeSafe } from '../helper/angular-type-safe';
import { Profile } from '../profile-editor/profile-editor.model';

export interface HomeViewModel {
  profile: FormGroupTypeSafe<Profile>;
}
