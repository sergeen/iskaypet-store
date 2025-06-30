import UserDataStyles from './UserData.module.css';
import { Section, Form } from '../components';

function UserData() {
  return (
    <div class={UserDataStyles['user-data']}>
      <Section>
        <Form></Form>
      </Section>
    </div>
  )
}

export default UserData;