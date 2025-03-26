reversenos :: [Int] -> [Int]
reversenos = reverse 


main :: IO ()
main = do
  let a=[1,2,3,4,5]
  let result = reversenos a
  putStrLn "the reverse program"
  putStrLn("the list is " ++ show a) 
  putStrLn("the result is "++show result)  
