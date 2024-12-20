filterevennos :: [Int] -> [Int]
filterevennos = filter even 


main :: IO ()
main = do
  let a=[1,2,3,4,5]
  let result = filterevennos a
  putStrLn("the list is " ++ show a) 
  putStrLn("the result is "++show result)  
