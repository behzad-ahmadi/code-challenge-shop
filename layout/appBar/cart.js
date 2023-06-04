import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';

export default function Cart({ itemCount }) {
  return (
    <>
      <IconButton sx={{ ml: 1 }}>
        <Badge badgeContent={itemCount} color='error'>
          <ShoppingCartOutlined />
        </Badge>
      </IconButton>
    </>
  );
}
