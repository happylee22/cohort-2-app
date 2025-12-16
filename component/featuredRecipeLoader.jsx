import { Skeleton } from "moti/skeleton";
export const FeaturedRecipeLoader = ({ children, loading, height }) => (
  // <MotiView
  //   transition={{
  //     type: 'timing',
  //   }}
  //   style={[styles.container, styles.padded]}
  //   animate={{ backgroundColor:  '#ffffff' }}
  // >
  <Skeleton
    show={loading}
    colorMode="light"
    height={height || 300}
    width="100%"
  >
    {children}
  </Skeleton>
  // </MotiView>
);
