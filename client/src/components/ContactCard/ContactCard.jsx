import { useAuth, useContacts } from 'utils/hooks';

const ContactCard = () => {
  const { userId } = useAuth();
  const { activeContact, isLoading } = useContacts();

  const shouldRender = !isLoading && userId === activeContact?.owner;
  const off = ['_id', 'name', 'group', 'favorite', 'owner'];

  return (
    <ul>
      {shouldRender &&
        Object.keys(activeContact).map(
          key =>
            !off.includes(key) &&
            activeContact[key] && (
              <li key={key}>{`${key}: ${activeContact[key]}`}</li>
            )
        )}
    </ul>
  );
};

export default ContactCard;
