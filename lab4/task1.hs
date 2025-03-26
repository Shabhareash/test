swaptuple :: (a, b) -> (b, a)
swaptuple (x, y) = (y, x)


main :: IO ()
main = do
  let t1 = (5, "aravind")
  let t2 = (2.123, True)
  putStrLn("before swapping" ++ show t1)  
  putStrLn("before swapping" ++ show t2)
  putStrLn("after swapping" ++ show(swaptuple t1))  
  putStrLn("after swapping" ++ show(swaptuple t2))

