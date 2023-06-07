import { Box, Card, CardContent, Skeleton } from '@mui/material';

export default function SkeletonCard() {
  return (
    <Card
      sx={{
        display: 'flex',
        maxWidth: 550,
        width: '100%',
        borderRadius: 5,
        minHeight: 150,
      }}
    >
      <Skeleton
        variant='rounded'
        style={{
          borderRadius: 23,
          marginTop: 'auto',
          marginBottom: 'auto',
          marginLeft: 9,
        }}
        width={150}
        height={120}
      />

      <CardContent sx={{ pl: 2, width: '100%' }}>
        {/* title */}
        <Skeleton variant='text' />

        {/* Description */}
        <Skeleton variant='text' height={60} />

        <Box display={'flex'} justifyContent={'space-between'} mt={2}>
          {/* Rating */}
          <Box display={'flex'} gap={0.5}>
            <Skeleton variant='circular' />
            <Skeleton variant='text' width={50} />
          </Box>

          {/* Price */}
          <Skeleton variant='text' width={50} />
        </Box>
      </CardContent>
    </Card>
  );
}
