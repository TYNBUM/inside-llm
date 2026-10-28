
const VIEWS=[['p1','第 1 部分','Part 1','模型里面到底有什么？','What is actually inside a model?'],
 ['p23','第 2–3 部分','Parts 2–3','最少够用的数学，与神经元、隐藏层','Minimum maths, neurons and hidden layers'],
 ['p4','第 4 部分','Part 4','从文本到上下文表示','From text to contextual representations'],
 ['p5','第 5 部分','Part 5','理解注意力与 Transformer','Attention and Transformers'],
 ['p6','第 6 部分','Part 6','模型如何学习与生成','How models learn and generate'],
 ['p7','第 7 部分','Part 7','从模型机制到 AI 基础设施','From mechanics to infrastructure'],
 ['p8','第 8 部分','Part 8','把整个系统连起来','Connecting the whole system']];
// [section id, view, number, zh, en, minutes]
const SECS=[
['c11','p1','1.1','程序、参数与计算','Program, parameters, computation',10],
['c12','p1','1.2','文本为何要变成数字','Why text becomes numbers',10],
['c13','p1','1.3','模型文件里有什么，运行时又多了什么','What a model file holds, and what appears at runtime',12],
['c14','p1','1.4','参数量衡量的是什么','What a parameter count measures',8],
['s0','p23','2·0','本部分导引','Orientation',3],
['c21','p23','2.1','标量、向量、矩阵、张量与形状','Scalars, vectors, matrices, tensors, shapes',12],
['s1','p23','2.2','向量与点积','Vectors and the dot product',9],
['s2','p23','3.1','一个神经元','One neuron',7],
['s3','p23','2.3·3.2','一层与矩阵乘法','A layer and matrix multiplication',9],
['s4','p23','3.3','隐藏层','Hidden layers',10],
['s5','p23','2.4·3.4','为什么需要非线性','Why nonlinearity',10],
['c25','p23','2.5','Softmax','Softmax',12],
['s6','p23','2–3·R','复习：读一份配置','Review: read a config',6],
['c41','p4','4.1','分词与 token ID','Tokenization and token IDs',10],
['c42','p4','4.2','嵌入查表','Embedding lookup',10],
['c43','p4','4.3','位置信息','Positional information',10],
['c44','p4','4.4','残差连接与归一化','Residual connections and normalization',12],
['c45','p4','4.5','上下文表示','Contextual representations',8],
['c51','p5','5.1','注意力要解决的问题','The problem attention solves',8],
['c52','p5','5.2','Q、K、V：学习到的投影','Q, K, V as learned projections',14],
['c53','p5','5.3','分数、缩放、掩码与 softmax','Scores, scaling, mask, softmax',16],
['c54','p5','5.4','加权 V：组合而非选择','Weighting V: combining, not selecting',10],
['c55','p5','5.5','多头注意力','Multi-head attention',14],
['c56','p5','5.6','MLP 与完整的 Transformer 块','The MLP and the full block',14],
['c57','p5','5.7','跨块的形状；注意力图不能说明什么','Shapes across blocks; limits of attention maps',8],
['c61','p6','6.1','构造输入与预测目标','Building inputs and targets',8],
['c62','p6','6.2','logits、概率与损失','Logits, probabilities, loss',12],
['c63','p6','6.3','梯度、反向传播与优化器','Gradients, backprop, optimizers',16],
['c64','p6','6.4','预训练、监督微调与偏好优化','Pretraining, SFT, preference optimization',8],
['c65','p6','6.5','训练并行，生成逐个','Parallel training, sequential generation',7],
['c66','p6','6.6','从 logits 到 token：采样','From logits to a token: sampling',12],
['c67','p6','6.7','生成循环、停止条件与权重不变','The loop, stopping, and unchanged weights',7],
['c71','p7','7.1','CPU、GPU、内存与数据搬运','CPU, GPU, memory, data movement',12],
['c72','p7','7.2','数值精度与量化','Precision and quantization',12],
['c73','p7','7.3','KV 缓存','The KV cache',14],
['c74','p7','7.4','预填充、解码与延迟指标','Prefill, decode, latency metrics',12],
['c75','p7','7.5','上下文、并发、批处理与显存估算','Context, concurrency, batching, memory',14],
['c76','p7','7.6','运行一个现成模型需要什么','What it takes to run an existing model',9],
['c77','p7','7.7','张量、流水线与数据并行','Tensor, pipeline and data parallelism',8],
['c81','p8','8.1','一个请求的完整旅程','One request, end to end',20],
['c82','p8','8.2','综合练习：读架构与部署配置','Capstone: architecture and deployment configs',20]];
const PARTS=[
 ['1','模型里面到底有什么？','What is actually inside a model?'],
 ['2','最少够用的数学','The minimum mathematics'],
 ['3','神经元、隐藏层与深度','Neurons, hidden layers, depth'],
 ['4','从文本到上下文表示','From text to contextual representations'],
 ['5','理解注意力与 Transformer','Attention and Transformers'],
 ['6','模型如何学习与生成','How models learn and generate'],
 ['7','从模型机制到 AI 基础设施','From mechanics to infrastructure'],
 ['8','把整个系统连起来','Connecting the whole system'],
 ['D','选修深入内容（嵌在各章中）','Optional deeper material (inside chapters)']];
// id, part, zh, en, minutes, prereqs, zh summary, en summary, zh lab, en lab, section
const CH=[
['1.1','1','程序、参数与计算','Program, parameters and computation',10,[],'同一份推理代码加载不同的权重文件，就得到行为完全不同的模型。区分写死的指令、学到的数值、运行时临时产生的数值。','The same inference code loaded with different weight files gives very different models. Separates fixed instructions, learned numbers, and numbers produced temporarily at runtime.','同一程序配两套参数','One program, two parameter sets','c11'],
['1.2','1','文本为何要变成数字','Why text has to become numbers',10,['1.1'],'为什么一个编号不够、为什么需要向量；维度为什么通常不对应命名概念；二维图为何只是投影。','Why one ID per item is not enough, why vectors are needed, why dimensions rarely map to named concepts, why 2D pictures are projections.','投影实验：换一对坐标轴看“邻居”','Projection lab: change the axes, change the “neighbours”','c12'],
['1.3','1','模型文件里有什么，运行时又多了什么','What a model file holds, and what appears at runtime',12,['1.2'],'GPT-2 small 的真实张量清单（名称、形状、数据类型）；磁盘上的参数、内存中的参数、计算中流动的数据。','The real tensor list of GPT-2 small (names, shapes, dtypes); parameters on disk, parameters in memory, data flowing through computation.','张量浏览器','Tensor browser','c13'],
['1.4','1','参数量衡量的是什么','What a parameter count measures',8,['1.3'],'参数量决定存储和每个 token 的计算量；它不是知识条数。','Parameter count sets storage and per-token compute; it is not a count of facts.','从配置算参数量','Parameter count from a config','c14'],
['2.1','2','标量、向量、矩阵、张量与形状','Scalars, vectors, matrices, tensors, shapes',12,['1.2'],'形状记法、轴的含义、哪些运算要求形状兼容；逐元素运算与广播。','Shape notation, what an axis means, which operations need compatible shapes; element-wise operations and broadcasting.','张量切片查看器','Tensor slice viewer','c21'],
['2.2','2','点积与加权和','Dot products and weighted sums',9,['2.1'],'点积作为对齐程度的度量与加权和。','The dot product as alignment and as a weighted sum.','拖动向量；8 维逐分量乘积','Drag vectors; 8-D component products','s1'],
['3.1','3','单个人工神经元','A single artificial neuron',7,['2.2'],'加权和、偏置、激活函数；参数与输入的区别。','Weighted sum, bias, activation function; parameters versus inputs.','三输入神经元','Three-input neuron','s2'],
['2.3','2','矩阵乘法与一层','Matrix multiplication and a layer',9,['3.1'],'每个输出元素都是一次点积；同一层对所有位置复用。','Each output element is a dot product; one layer is reused across positions.','可单步的矩阵乘法；形状检查器','Single-step matrix multiplication; shape checker','s3'],
['3.3','3','隐藏层与一个微型网络','Hidden layers and a tiny network',10,['2.3'],'层间传递什么；“隐藏”的含义；宽度与深度；“第 N 层负责 X”为何误导。','What passes between layers; what “hidden” means; width versus depth; why “layer N does X” misleads.','可编辑的 XOR 网络','Editable XOR network','s4'],
['3.4','3','线性与非线性；为什么需要非线性','Linear vs nonlinear; why nonlinearity matters',10,['3.3'],'线性层叠加仍是线性层；XOR 不可能性证明；万能逼近定理的含义与局限。','Stacked linear layers stay linear; the XOR impossibility argument; what universal approximation does and does not say.','网格穿过两层','A grid through two layers','s5'],
['2.5','2','Softmax','Softmax',12,['2.2'],'把分数变成和为 1 的权重；平移不变、对缩放敏感；它给出的是权重，不是确定性的证明。','Turns scores into weights summing to 1; shift-invariant, scale-sensitive; weights, not proof of certainty.','softmax 与温度','Softmax and temperature','c25'],
['4.1','4','分词与 token ID','Tokenization and token IDs',10,['2.1'],'子词分词；ID 只是行号。','Subword tokenization; an ID is only a row number.','玩具分词器','Toy tokenizer','c41'],
['4.2','4','嵌入查表','Embedding lookup',10,['4.1','2.3'],'嵌入矩阵 [V, d] 是参数；查表 = 独热 × 矩阵。','The embedding matrix [V, d] is a parameter; lookup = one-hot × matrix.','独热 × 矩阵','one-hot × matrix','c42'],
['4.3','4','位置信息','Positional information',10,['4.2'],'没有位置信息时注意力不区分顺序；绝对位置嵌入与 RoPE。','Without position, attention ignores order; absolute position embeddings and RoPE.','旋转位置演示','Rotary position demo','c43'],
['4.4','4','残差连接与归一化','Residual connections and normalization',12,['4.2','3.4'],'残差流；LayerNorm 与 RMSNorm 的数值行为。','The residual stream; how LayerNorm and RMSNorm behave numerically.','残差与 RMSNorm 计算器','Residual and RMSNorm calculator','c44'],
['4.5','4','上下文表示','Contextual representations',8,['4.4'],'同一 token 在不同上下文中为何得到不同向量。','Why the same token gets different vectors in different contexts.','—','—','c45'],
['5.1','5','注意力要解决的问题','The problem attention solves',8,['4.5','2.5'],'一个位置如何按相关程度汇集其他可见位置的信息。','How a position gathers information from visible positions by relevance.','—','—','c51'],
['5.2','5','Q、K、V：学习到的投影','Q, K, V as learned projections',14,['5.1'],'同一输入乘三个参数矩阵；不是字面意义的问题、钥匙、答案。','One input times three parameter matrices; not literal questions, keys, answers.','注意力实验：投影','Attention lab: projections','c52'],
['5.3','5','分数、缩放、掩码与 softmax','Scores, scaling, mask, softmax',16,['5.2'],'QKᵀ、除以 √d_k、因果掩码、逐行 softmax。','QKᵀ, dividing by √d_k, the causal mask, row-wise softmax.','注意力实验：掩码开关','Attention lab: mask toggle','c53'],
['5.4','5','加权 V：组合而非选择','Weighting V: combining, not selecting',10,['5.3'],'输出是 V 的加权组合。','The output is a weighted combination of V.','注意力实验：输出','Attention lab: output','c54'],
['5.5','5','多头注意力','Multi-head attention',14,['5.4'],'切分成头、并行计算、拼接、W_O 混合；头没有固定职责。','Split into heads, compute in parallel, concatenate, mix with W_O; heads have no fixed jobs.','多头形状计算器','Multi-head shape calculator','c55'],
['5.6','5','MLP 与完整的 Transformer 块','The MLP and the full block',14,['5.5','4.4'],'前置归一化块的完整数据流。','The full data flow of a pre-norm block.','可点击的块数据流图','Clickable block data flow','c56'],
['5.7','5','跨块的形状；注意力图的局限','Shapes across blocks; limits of attention maps',8,['5.6'],'不变的 [n, d_model] 与临时扩张的形状；可视化不等于解释。','The constant [n, d_model] and temporary expansions; visualisation is not explanation.','—','—','c57'],
['6.1','6','构造输入与预测目标','Building inputs and targets',8,['5.6'],'目标 = 输入右移一位；每个位置一个预测任务。','Targets = inputs shifted by one; one prediction task per position.','—','—','c61'],
['6.2','6','logits、概率与损失','Logits, probabilities, loss',12,['6.1','2.5'],'反嵌入、softmax、交叉熵。','Unembedding, softmax, cross-entropy.','logit 与损失','Logits and loss','c62'],
['6.3','6','梯度、反向传播与优化器','Gradients, backprop, optimizers',16,['6.2','3.3'],'一次完整的手算参数更新。','One complete hand-computed parameter update.','一步梯度下降','One gradient step','c63'],
['6.4','6','预训练、SFT 与偏好优化','Pretraining, SFT, preference optimization',8,['6.3'],'三个阶段的数据与目标。','Data and objectives of the three stages.','—','—','c64'],
['6.5','6','训练并行，生成逐个','Parallel training, sequential generation',7,['6.1','5.3'],'为什么训练能一次算所有位置。','Why training computes all positions at once.','训练与推理数据流对比','Training vs inference data flow','c65'],
['6.6','6','从 logits 到 token：采样','From logits to a token: sampling',12,['6.2'],'温度、top-k、top-p。','Temperature, top-k, top-p.','采样实验','Sampling lab','c66'],
['6.7','6','生成循环、停止条件与权重不变','The loop, stopping, unchanged weights',7,['6.6','6.5'],'追加、停止、上下文不改参数。','Append, stop, context does not change parameters.','—','—','c67'],
['7.1','7','CPU、GPU、内存与数据搬运','CPU, GPU, memory, data movement',12,['2.3','1.3'],'为什么 GPU 适合；为什么搬数据常比计算慢。','Why GPUs fit; why moving data is often slower than computing.','带宽与算力计算器','Bandwidth vs compute calculator','c71'],
['7.2','7','数值精度与量化','Precision and quantization',12,['7.1','1.4'],'每参数字节数；量化误差。','Bytes per parameter; quantization error.','量化误差实验','Quantization error lab','c72'],
['7.3','7','KV 缓存','The KV cache',14,['5.4','6.7'],'保存 K、V 而不保存 Q 的原因；大小公式。','Why K and V are kept but not Q; the size formula.','（与 7.4 共用）','(Shared with 7.4)','c73'],
['7.4','7','预填充、解码与延迟指标','Prefill, decode, latency metrics',12,['7.3','7.1'],'两阶段的计算特征；TTFT、逐 token 延迟、吞吐。','Compute character of the two phases; TTFT, per-token latency, throughput.','预填充/解码与 KV 增长动画','Prefill/decode and KV growth animation','c74'],
['7.5','7','上下文、并发、批处理与显存','Context, concurrency, batching, memory',14,['7.4','7.2'],'资源占用如何随这些量变化。','How resource use scales with these quantities.','显存估算器','Memory estimator','c75'],
['7.6','7','运行一个现成模型需要什么','What it takes to run an existing model',9,['7.5','4.1'],'文件、分词器、引擎、服务器。','Files, tokenizer, engine, server.','—','—','c76'],
['7.7','7','张量、流水线与数据并行','Tensor, pipeline, data parallelism',8,['7.5'],'三种拆分各拆什么。','What each scheme splits.','—','—','c77'],
['8.1','8','一个请求的完整旅程','One request, end to end',20,['7.6','7.7','6.7'],'从请求到流式输出的每一步。','Every step from request to streamed output.','可点击的端到端流程','Clickable end-to-end pipeline','c81'],
['8.2','8','综合练习','Capstone exercises',20,['8.1'],'解读架构配置与部署配置。','Interpret architecture and deployment configs.','—','—','c82'],
['D1','D','叠加假说','The superposition hypothesis',10,['1.2'],'特征多于维度时会发生什么。','What happens with more features than dimensions.','','','c12'],
['D2','D','现代块：RMSNorm、SwiGLU、RoPE、无偏置','Modern blocks: RMSNorm, SwiGLU, RoPE, no biases',15,['5.6'],'Llama 2 与 GPT-2 逐项对比。','Llama 2 versus GPT-2, item by item.','','','c56'],
['D3','D','分组查询注意力 GQA/MQA','Grouped-query attention (GQA/MQA)',10,['7.3'],'更少的 K/V 头如何缩小缓存。','How fewer K/V heads shrink the cache.','','','c73'],
['D4','D','混合专家：总参数与激活参数','Mixture of Experts: total vs active parameters',10,['1.4'],'显存看总参数，计算看激活参数。','Memory follows total, compute follows active parameters.','','','c14'],
['D5','D','Adam 与训练显存','Adam and training memory',12,['6.3'],'训练为何比推理费显存得多。','Why training needs far more memory.','','','c63'],
['D6','D','算术强度与 FlashAttention','Arithmetic intensity and FlashAttention',12,['7.4'],'访存受限与计算受限。','Memory-bound versus compute-bound.','','','c74'],
['D7','D','PagedAttention 与连续批处理','PagedAttention and continuous batching',10,['7.5'],'服务端如何管理 KV 缓存。','How servers manage the KV cache.','','','c75'],
['D8','D','推测解码','Speculative decoding',8,['7.4'],'小模型起草，大模型验证。','Draft small, verify large.','','','c74'],
['D9','D','可解释性方法及其局限','Interpretability methods and limits',10,['5.7'],'探针、归因、稀疏自编码器。','Probing, attribution, sparse autoencoders.','','','c57']
].map(r=>({id:r[0],p:r[1],t:[r[2],r[3]],m:r[4],pre:r[5],s:[r[6],r[7]],lab:[r[8],r[9]],sec:r[10]}));


// Quiz: k = kind [zh,en]; q = question; c = [zh, en, why zh, why en, correct]
const KIND={pred:['预测','Predict'],calc:['计算','Compute'],err:['找错','Spot the error'],expl:['用自己的话解释','Explain in your own words']};
const Q={
s1q1:{k:'calc',q:['a = (3, 0)，w = (0, 4)。两支箭头都不短。a · w 等于多少？','a = (3, 0), w = (0, 4). Neither arrow is short. What is a · w?'],c:[
 ['12','12','12 是两者长度的乘积 |a||w|。点积还要乘 cos θ，而这两支箭头互相垂直（一个沿横轴，一个沿纵轴），cos 90° = 0。','12 is the product of the lengths |a||w|. The dot product also multiplies by cos θ, and these arrows are perpendicular (one along each axis), so cos 90° = 0.',0],
 ['0','0','正确。3×0 + 0×4 = 0。长度大不等于点积大：方向互相垂直时点积为 0。这也是为什么点积可以衡量“方向是否相关”。','Correct. 3×0 + 0×4 = 0. Long vectors do not guarantee a large dot product: perpendicular directions give 0. This is why the dot product can measure whether directions are related.',1],
 ['7','7','7 是把所有分量相加 3+0+0+4。点积是对应分量<b>相乘</b>再相加。','7 adds all the components, 3+0+0+4. The dot product <b>multiplies</b> matching components, then adds.',0],
 ['5','5','5 是 w − a 的长度（勾股数 3-4-5），与点积无关。','5 is the length of w − a (a 3-4-5 triangle); it is unrelated to the dot product.',0]]},
s1q2:{k:'pred',q:['保持 a 不变，把 w 的方向保持不变、长度加倍。点积和 cos θ 会怎样？','Keep a fixed. Keep w\'s direction but double its length. What happens to the dot product and to cos θ?'],c:[
 ['两者都加倍','Both double','cos θ 只取决于夹角，长度变化不影响夹角，而且 cos 不可能超过 1。','cos θ depends only on the angle; changing length does not change the angle, and cos can never exceed 1.',0],
 ['点积加倍，cos θ 不变','Dot product doubles, cos θ unchanged','正确。每一项 a<sub>i</sub>w<sub>i</sub> 都乘了 2，所以总和加倍；夹角没变，cos θ 不变。可以在实验 A1 中验证：例如把 w 从 (1, 3) 改成 (2, 6)。这说明点积混合了“方向”和“长度”两种信息，这正是真实模型需要归一化的原因之一。','Correct. Every term a<sub>i</sub>w<sub>i</sub> is multiplied by 2, so the sum doubles; the angle is unchanged, so cos θ is too. Check it in Lab A1, e.g. change w from (1, 3) to (2, 6). The dot product mixes direction and length, which is one reason real models need normalization.',1],
 ['点积不变，cos θ 加倍','Dot product unchanged, cos θ doubles','方向反了：变的是点积，不是 cos θ。','Backwards: the dot product changes, cos θ does not.',0],
 ['两者都不变','Both unchanged','点积是逐项乘积之和，w 的每个分量都变成两倍，总和必然变化。','The dot product sums term-by-term products; every component of w doubled, so the sum must change.',0]]},
s2q1:{k:'calc',q:['x = (2, 0, 1)，w = (0.5, −0.25, 1)，b = −1，激活函数 ReLU。神经元输出是多少？','x = (2, 0, 1), w = (0.5, −0.25, 1), b = −1, activation ReLU. What does the neuron output?'],c:[
 ['1','1','正确。2×0.5 = 1；0×(−0.25) = 0；1×1 = 1。加权和 2，加偏置 −1，z = 1。ReLU(1) = 1。','Correct. 2×0.5 = 1; 0×(−0.25) = 0; 1×1 = 1. Weighted sum 2, plus bias −1 gives z = 1. ReLU(1) = 1.',1],
 ['2','2','2 是加权和，还没有加上偏置 b = −1。','2 is the weighted sum before adding the bias b = −1.',0],
 ['0','0','ReLU 只把<b>负数</b>变成 0。这里 z = 1 是正数，原样输出。','ReLU only turns <b>negative</b> values into 0. Here z = 1 is positive and passes through.',0],
 ['−1','−1','−1 只是偏置本身。另外，ReLU 的输出永远不会是负数。','−1 is just the bias. Also, ReLU never outputs a negative number.',0]]},
s2q2:{k:'pred',q:['一个 ReLU 神经元当前 z = −3，输出 0。x₁ = 1。把 w₁ 增加 0.5，输出会怎样？','A ReLU neuron currently has z = −3 and outputs 0, with x₁ = 1. If w₁ increases by 0.5, what happens to the output?'],c:[
 ['增加 0.5','Increases by 0.5','z 确实增加 0.5，变成 −2.5，但仍是负数，ReLU 输出仍为 0。','z does increase by 0.5, to −2.5, but it is still negative, so ReLU still outputs 0.',0],
 ['仍然是 0','Stays 0','正确。z 从 −3 变到 −2.5，仍低于 0。在 ReLU 的负半边，小的参数变化完全不影响输出。第 6 部分会看到这一点的后果：这里的梯度为 0，训练无法通过这个输入调整这个神经元。','Correct. z moves from −3 to −2.5, still below 0. On ReLU\'s negative side, small parameter changes have no effect on the output at all. Part 6 shows the consequence: the gradient is 0 here, so training cannot adjust this neuron through this input.',1],
 ['变成负数','Becomes negative','ReLU 的输出不会是负数。','ReLU never outputs a negative number.',0],
 ['无法判断','Cannot tell','可以判断：z 的变化量是 x₁ × 0.5 = 0.5，新的 z 仍为负。','You can tell: z changes by x₁ × 0.5 = 0.5, and the new z is still negative.',0]]},
s2q3:{k:'err',q:['找错：“神经元每次看到新的输入，都会根据这个输入重新计算一遍自己的权重。”','Spot the error: “Each time a neuron sees a new input, it recomputes its weights from that input.”'],c:[
 ['这句话是对的','The statement is correct','它把参数和激活值混为一谈了。','It confuses parameters with activations.',0],
 ['错：推理时权重固定，随输入变化的是 z 和输出','Wrong: weights are fixed during inference; z and the output vary with the input','正确。w 和 b 是参数，只在训练时改变；推理时读出来使用，不会被输入改写。x、z、h 是激活值，每次输入都重新计算。（第 5 部分的注意力里有“随输入变化的权重”，即注意力权重，但那是激活值，不是参数。）','Correct. w and b are parameters that change only during training; inference reads them and never rewrites them from the input. x, z and h are activations, recomputed for every input. (Attention in Part 5 has “weights” that vary with the input, the attention weights, but those are activations, not parameters.)',1],
 ['错：只有偏置会重新计算','Wrong: only the bias is recomputed','偏置也是参数，推理时同样固定。','The bias is also a parameter and is equally fixed during inference.',0],
 ['只在使用 ReLU 时才对','Correct only when using ReLU','激活函数的选择与参数是否改变无关。','The choice of activation function has nothing to do with whether parameters change.',0]]},
s3q1:{k:'calc',q:['x 形状 [5]，W 形状 [5, 2]。x W 的形状是？','x has shape [5], W has shape [5, 2]. What is the shape of x W?'],c:[
 ['[2]','[2]','正确。相邻的 5 相等并“消掉”，剩下 W 的列数 2：这一层有 2 个神经元，输出 2 个数。','Correct. The touching 5s match and disappear, leaving W\'s column count, 2: this layer has 2 neurons and outputs 2 numbers.',1],
 ['[5]','[5]','输出的长度等于神经元个数，也就是 W 的列数，不是输入长度。','The output length equals the number of neurons, i.e. W\'s columns, not the input length.',0],
 ['[5, 2]','[5, 2]','那是 W 本身的形状。乘法之后输入维度会消失。','That is W\'s own shape. The input dimension disappears after multiplication.',0],
 ['[10]','[10]','形状不是相乘得到的。','Shapes are not multiplied together.',0]]},
s3q2:{k:'pred',q:['X 形状 [10, 768]（10 个位置），W 形状 [768, 3072]。如果文本变成 1000 个位置，这一层的参数个数如何变化？','X has shape [10, 768] (10 positions) and W has shape [768, 3072]. If the text grows to 1000 positions, how does this layer\'s parameter count change?'],c:[
 ['增加 100 倍','Grows 100×','变大的是激活值：输出从 [10, 3072] 变成 [1000, 3072]。W 和 b 不变。','The activations grow: output goes from [10, 3072] to [1000, 3072]. W and b do not.',0],
 ['完全不变，仍是 2,362,368','Unchanged, still 2,362,368','正确。所有位置共用同一个 W 和 b。文本长度影响的是运行时的激活值（以及第 7 部分的 KV 缓存），而不是模型文件的大小。','Correct. All positions share the same W and b. Text length affects runtime activations (and, in Part 7, the KV cache), not the size of the model file.',1],
 ['增加 990 个','Grows by 990','参数数目与位置数无关。','The parameter count does not depend on the number of positions.',0],
 ['取决于文本内容','Depends on the text content','参数数目只由架构决定。','The parameter count is set by the architecture alone.',0]]},
s3q3:{k:'err',q:['找错：“W 形状 [3, 4]、b 形状 [4] 的这一层有 4 个神经元，所以有 4 个参数。”','Spot the error: “This layer, with W of shape [3, 4] and b of shape [4], has 4 neurons, so it has 4 parameters.”'],c:[
 ['没有错','No error','神经元个数和参数个数是两回事。','Neuron count and parameter count are different things.',0],
 ['错：应是 12 个','Wrong: it is 12','12 只算了 W，漏了 4 个偏置。','12 counts only W and misses the 4 biases.',0],
 ['错：应是 16 个','Wrong: it is 16','正确。每个神经元有 3 个权重和 1 个偏置：4 × (3 + 1) = 16，即 d_in·d_out + d_out。','Correct. Each neuron has 3 weights and 1 bias: 4 × (3 + 1) = 16, i.e. d_in·d_out + d_out.',1],
 ['错：应是 7 个','Wrong: it is 7','3 + 4 是把形状的数字相加，不是参数个数。','3 + 4 adds the shape numbers; it is not the parameter count.',0]]},
s4q1:{k:'pred',q:['实验 D 用“可用的解”，输入 (1, 1)。如果把 h₂ 的偏置从 −1 改成 0，输出 y 会变成多少？先算再到实验里验证。','Lab D with the working solution, input (1, 1). If h₂\'s bias changes from −1 to 0, what does y become? Compute first, then verify in the lab.'],c:[
 ['−2','−2','正确。h₁ = ReLU(2) = 2 不受影响；h₂ = ReLU(1 + 1 + 0) = 2；y = 2 − 2×2 = −2。改一个参数会影响所有经过它的输入：再看 (1, 0)，h₂ 变成 1，y = 1 − 2 = −1，也出错了。','Correct. h₁ = ReLU(2) = 2 is unaffected; h₂ = ReLU(1 + 1 + 0) = 2; y = 2 − 2×2 = −2. One parameter affects every input that passes through it: for (1, 0), h₂ becomes 1 and y = 1 − 2 = −1, also wrong.',1],
 ['0','0','原来 h₂ = 1，现在 h₂ = 2，被 −2 放大后影响输出。','h₂ was 1 and is now 2; multiplied by −2, that changes the output.',0],
 ['1','1','试着把 h₁、h₂ 分别算出来，再代入 y = h₁ − 2h₂。','Compute h₁ and h₂ separately, then substitute into y = h₁ − 2h₂.',0],
 ['2','2','这是 h₁（或新的 h₂）的值，不是 y。','That is h₁ (or the new h₂), not y.',0]]},
s4q2:{k:'pred',q:['下列哪些会保存在这个 XOR 网络的模型文件中？','Which of these would be saved in this XOR network\'s model file?'],c:[
 ['W₁、b₁、W₂、b₂','W₁, b₁, W₂, b₂','正确。共 4 + 2 + 2 + 1 = 9 个数。h 和 y 只在处理某个输入时临时存在于内存中。','Correct: 4 + 2 + 2 + 1 = 9 numbers. h and y exist in memory only temporarily, while an input is processed.',1],
 ['h₁、h₂','h₁, h₂','隐藏层的值取决于输入，处理完就丢弃。','Hidden values depend on the input and are discarded after use.',0],
 ['四组输入 (x₁, x₂)','The four inputs (x₁, x₂)','输入属于数据，不属于模型。','Inputs are data, not part of the model.',0],
 ['以上全部','All of the above','只有参数会被保存。','Only parameters are saved.',0]]},
s5q1:{k:'calc',q:['两个没有激活函数的线性层：W₁ 形状 [4, 6]，W₂ 形状 [6, 3]（忽略偏置）。哪种说法正确？','Two linear layers without an activation: W₁ is [4, 6], W₂ is [6, 3] (ignore biases). Which is correct?'],c:[
 ['等价于一个 [4, 3] 的层；原来有 42 个权重，合并后只需 12 个','Equivalent to one [4, 3] layer; 42 weights before, 12 after merging','正确。W₁W₂ 的形状是 [4, 3]。功能上相同，参数个数不同：4×6 + 6×3 = 42 对 4×3 = 12。','Correct. W₁W₂ has shape [4, 3]. Same function, different parameter count: 4×6 + 6×3 = 42 versus 4×3 = 12.',1],
 ['等价于一个 [4, 6] 的层','Equivalent to one [4, 6] layer','合并后中间维度 6 消失，输出维度来自 W₂。','The middle dimension 6 disappears when merging; the output dimension comes from W₂.',0],
 ['形状不同，无法合并','Shapes differ, so they cannot be merged','相邻维度 6 匹配，所以可以相乘。','The touching dimension 6 matches, so they can be multiplied.',0],
 ['比单层表达能力更强，因为参数更多','More expressive than one layer because it has more parameters','参数更多不等于表达能力更强。没有非线性，它能表示的函数和一个 [4, 3] 层完全相同。','More parameters do not mean more expressive power. Without a nonlinearity it represents exactly the same functions as one [4, 3] layer.',0]]},
s5q2:{k:'pred',q:['实验 E 打开 ReLU。第一层输出两个分量都为负的所有输入点，最终会落在哪里？','In Lab E with ReLU on, where do all input points end up whose layer-1 outputs are negative in both components?'],c:[
 ['全部落在同一个点，即 b₂','All on one point, namely b₂','正确。ReLU 把它们全部变成 (0, 0)，(0, 0) × W₂ + b₂ = b₂。整片区域被压成一个点，后面的层再也无法区分它们。这是“折叠”的极端情况。','Correct. ReLU turns them all into (0, 0), and (0, 0) × W₂ + b₂ = b₂. A whole region is crushed to a single point that later layers can no longer tell apart. This is folding in its most extreme form.',1],
 ['保持原样','They stay where they were','ReLU 改变了它们，第二层还会再变换一次。','ReLU changes them, and layer 2 transforms them again.',0],
 ['沿一条直线分布','Along a line','只有一个分量为负的点才会落在直线（坐标轴）上；两个都为负时会落在同一个点。','Points with just one negative component land on a line (an axis); with both negative, they land on one point.',0],
 ['被删除','They are deleted','没有点被删除；每个输入都有输出。','No points are deleted; every input has an output.',0]]},
s5q3:{k:'err',q:['找错：“只要线性层叠得足够深，网络最终也能学会 XOR。”','Spot the error: “Stack enough linear layers and the network will eventually learn XOR.”'],c:[
 ['没有错，深度能弥补一切','No error; depth makes up for everything','深度只有在层间存在非线性时才有意义。','Depth only helps when there are nonlinearities between layers.',0],
 ['错：任意多个线性层合起来仍是一个仿射函数，而仿射函数总满足 f(0,0)+f(1,1) = f(1,0)+f(0,1)','Wrong: any number of linear layers is still one affine function, which always satisfies f(0,0)+f(1,1) = f(1,0)+f(0,1)','正确。XOR 要求左边为 0、右边为 2，所以不存在这样的参数，训练再久也找不到。','Correct. XOR needs the left side to be 0 and the right side 2, so no such parameters exist, however long training runs.',1],
 ['错：需要更宽而不是更深','Wrong: it needs more width, not depth','加宽同样无济于事，问题是缺少非线性。','Adding width does not help either; the missing piece is the nonlinearity.',0],
 ['只在没有偏置时才错','Wrong only without biases','有偏置时它仍是仿射函数，证明照样成立。','With biases it is still affine, and the argument still holds.',0]]},
s6q1:{k:'pred',q:['把 2000 个 token 送进 GPT-2 small 的 MLP 第一层（W 形状 [768, 3072]）。下面哪个说法正确？','2000 tokens go into GPT-2 small\'s first MLP layer (W of shape [768, 3072]). Which statement is correct?'],c:[
 ['输出激活值形状 [2000, 3072]；该层参数仍是 2,362,368 个','Output activations have shape [2000, 3072]; the layer still has 2,362,368 parameters','正确。激活值随位置数增长（2000 × 3072 = 6,144,000 个数，比这一层的参数还多），参数不变。这种“运行时数据可以超过权重”的现象，在第 7 部分的 KV 缓存中会更加明显。','Correct. Activations grow with the number of positions (2000 × 3072 = 6,144,000 numbers, more than the layer\'s parameters); the parameters do not change. Runtime data exceeding weights becomes even more visible with the KV cache in Part 7.',1],
 ['输出形状 [2000, 768]','Output shape [2000, 768]','这是第二个 MLP 层投影回来之后的形状，不是第一层的输出。','That is the shape after the second MLP layer projects back, not the first layer\'s output.',0],
 ['参数会增加到 2000 × 2,362,368','Parameters grow to 2000 × 2,362,368','所有位置共享同一套参数。','Every position shares the same parameters.',0],
 ['形状不匹配，无法计算','Shapes do not match, so it cannot run','[2000, 768] × [768, 3072] 的相邻维度都是 768，可以计算。','[2000, 768] × [768, 3072] has 768 on both touching sides, so it works.',0]]}
};
const E={
s1e1:{k:'err',q:['有人说：“这个模型 4096 维隐藏状态中的第 17 维是‘复数’维度，值越大说明这个词越可能是复数。”这句话有什么问题？要支持这样的说法，至少需要检查什么？','Someone says: “Dimension 17 of this model\'s 4096-dimensional hidden state is the ‘plural’ dimension; a larger value means the word is more likely plural.” What is wrong with this? What would you need to check, at minimum, to support such a claim?'],
 a:['问题在于它默认单个维度有固定含义。训练并不要求信息与坐标轴对齐，信息通常分布在多个维度的组合（某个方向）上，而且同一个维度可能同时参与许多不相关的特征（叠加）。要支持这样的说法，至少要检查：(1) 在大量复数与单数的例子上，第 17 维是否稳定地区分它们，而不只是在挑选出的几个例子上；(2) 它是否也对其他无关的性质有反应；(3) 某个由多维组合成的方向是否比单独第 17 维区分得好得多；(4) 干预检验：只改变第 17 维的数值，模型的行为是否按“复数”的方式改变。即使这些都成立，结论也只适用于这个模型的这一层。','The problem is the assumption that a single dimension has a fixed meaning. Training does not require information to align with the coordinate axes; information is usually spread over combinations of dimensions (a direction), and one dimension may take part in many unrelated features at once (superposition). To support the claim you would at least need to check: (1) whether dimension 17 reliably separates plural from singular across many examples, not just a few hand-picked ones; (2) whether it also responds to unrelated properties; (3) whether some multi-dimensional direction separates them much better than dimension 17 alone; (4) an intervention test: if you change only dimension 17, does the model\'s behaviour change in a “plural” way? Even if all of this held, the conclusion would apply only to that layer of that model.']},
s4e1:{k:'expl',q:['用自己的话说明：网络先处理输入 (0, 1)，再处理输入 (1, 1)。在这两次计算之间，哪些数变了，哪些没变？“隐藏层”这个名字和这有什么关系？','In your own words: the network processes input (0, 1), then input (1, 1). Between the two computations, which numbers changed and which did not? How does this relate to the name “hidden layer”?'],
 a:['没变的是全部参数：W₁、b₁、W₂、b₂ 这 9 个数，两次计算读取的是同一份。变了的是全部激活值：输入从 (0, 1) 变成 (1, 1)；隐藏层预激活从 (1, 0) 变成 (2, 1)；隐藏值从 (1, 0) 变成 (2, 1)；输出从 1 变成 0。隐藏值之所以叫“隐藏”，是因为任务只规定了输入和期望输出 (0 或 1)，没有规定 h 应是多少；h 的具体数值完全由参数决定。我们能看见它们，只是没有人事先规定它们。','Unchanged: all the parameters, the 9 numbers in W₁, b₁, W₂, b₂, read identically both times. Changed: all the activations. The input goes from (0, 1) to (1, 1); the hidden pre-activations from (1, 0) to (2, 1); the hidden values from (1, 0) to (2, 1); the output from 1 to 0. The hidden values are called “hidden” because the task specifies only the inputs and desired outputs (0 or 1), not what h should be; h is determined entirely by the parameters. We can see the values; nobody specified them in advance.']},
s6e1:{k:'expl',q:['向一位同事解释：在 Llama 2 7B 的一个块里，MLP 子层对“某一个位置”的向量做了什么？请写出每一步的形状，并说明哪些是参数、哪些是激活值。（可以先忽略 SwiGLU 的门控细节。）','Explain to a colleague what the MLP sublayer in one block of Llama 2 7B does to the vector at one position. Give the shape at each step and say which things are parameters and which are activations. (You may ignore SwiGLU\'s gating details.)'],
 a:['输入是该位置的激活值向量，形状 [4096]。第一步用参数矩阵（概念上 [4096, 11008]）把它扩宽成 [11008] 的预激活值，这是激活值。第二步逐元素地通过非线性函数（Llama 中是 SiLU，配合门控，再与另一路 [11008] 投影逐元素相乘），结果仍是 [11008] 的激活值。第三步用另一个参数矩阵（概念上 [11008, 4096]）投影回 [4096]。输出与输入形状相同，因此可以加回残差流（第 4.4 章）并交给下一个块。参数：三个投影矩阵（共 3×4096×11008 个数），在所有位置、所有请求之间共享，推理时不变。激活值：[4096] 输入、两个 [11008] 中间结果、[4096] 输出，每个位置、每个请求都重新计算。','The input is that position\'s activation vector, shape [4096]. Step 1: a parameter matrix (conceptually [4096, 11008]) widens it into an [11008] pre-activation, which is an activation. Step 2: a nonlinearity is applied element-wise (in Llama, SiLU in a gated form, multiplied element-wise with a second [11008] projection), giving another [11008] activation. Step 3: another parameter matrix (conceptually [11008, 4096]) projects back to [4096]. The output has the same shape as the input, so it can be added back into the residual stream (Chapter 4.4) and passed to the next block. Parameters: the three projection matrices (3×4096×11008 numbers), shared across all positions and requests, unchanged during inference. Activations: the [4096] input, the two [11008] intermediates and the [4096] output, recomputed for every position and request.']},
s6e2:{k:'err',q:['找错：“我把一篇很长的文档粘贴进对话后，模型的权重会变大，用来存放这篇文档。”用这两部分学到的概念解释错在哪里。','Spot the error: “When I paste a long document into a chat, the model\'s weights grow to hold it.” Use the concepts from these parts to explain what is wrong.'],
 a:['权重是参数，数量由架构决定，推理时只读不写。粘贴的文档会被转换成许多位置的输入，变多的是激活值：例如每一层的 [n, d] 矩阵随 n 增长（以及第 7 部分要讲的 KV 缓存）。这些数据只存在于运行时内存中，请求结束后就释放，不会写回模型文件。所以长文档会让内存占用和计算量增加，但不会改变模型本身；下一个对话的模型参数和之前完全一样。','Weights are parameters; their number is set by the architecture, and inference only reads them. The pasted document becomes inputs at many positions, and what grows is the activations: for example each layer\'s [n, d] matrix grows with n (as does the KV cache, covered in Part 7). That data exists only in runtime memory and is released when the request ends; it is never written back into the model file. So a long document increases memory use and compute, but does not change the model; the next conversation uses exactly the same parameters.']}
};
const G={
scalar:['标量','scalar','单独的一个数。点积的结果就是一个标量。','A single number. The result of a dot product is a scalar.','s1'],
vector:['向量','vector','有顺序的一串数，形状 [d]。可以看作 d 维空间中的一个点或箭头。','An ordered list of numbers, shape [d]. Can be viewed as a point or arrow in d-dimensional space.','s1'],
dimension:['维度','dimension','向量中数字的个数；也指某一个位置（“第 i 维”）。在形状 [n, d] 中，“维”还可以指其中一个轴。','The count of numbers in a vector; also one slot (“dimension i”). In a shape like [n, d], each axis is also called a dimension.','s1'],
dot:['点积','dot product','两个等长向量对应分量相乘再相加，得到一个标量。衡量方向的对齐程度，并受长度影响。','Multiply matching components of two equal-length vectors and add, giving a scalar. Measures directional alignment, scaled by length.','s1'],
matrix:['矩阵','matrix','排成行和列的数表，形状 [行, 列]。一层的权重就是一个矩阵，每列对应一个神经元。','A table of numbers in rows and columns, shape [rows, cols]. A layer\'s weights form a matrix, one column per neuron.','s3'],
shape:['形状','shape','张量每个轴的长度，例如 [n, d]。矩阵乘法要求相邻轴长度相等。','The length of each axis of a tensor, e.g. [n, d]. Matrix multiplication requires the touching axes to match.','s3'],
tensor:['张量','tensor','任意多个轴的数组的统称：标量 0 轴，向量 1 轴，矩阵 2 轴，以此类推。','General name for an array with any number of axes: a scalar has 0, a vector 1, a matrix 2, and so on.','s3'],
parameter:['参数','parameter','训练得到、推理时固定、保存在模型文件里的数。权重和偏置都是参数。','A number produced by training, fixed during inference, saved in the model file. Weights and biases are parameters.','s1'],
weight:['权重','weight','乘在输入上的参数，决定每个输入的影响大小和方向。','A parameter multiplied with an input, setting how much and in which direction that input counts.','s2'],
bias:['偏置','bias','加在加权和上的参数，与输入无关，用来平移门槛。','A parameter added to the weighted sum, independent of the input, that shifts the threshold.','s2'],
activation:['激活值','activation','处理某个输入时临时计算出来的数，例如层的输出。随输入变化，不保存在模型文件中。','A number computed while processing a particular input, such as a layer\'s output. Varies with the input; not saved in the model file.','s1'],
preact:['预激活值','pre-activation','加权和加偏置后、经过激活函数之前的值 z。','The value z after the weighted sum and bias, before the activation function.','s2'],
actfn:['激活函数','activation function','逐元素作用的非线性函数，如 ReLU、GELU、SiLU。通常没有可学习参数。','A nonlinear function applied element-wise, such as ReLU, GELU, SiLU. Usually has no learned parameters.','s2'],
relu:['ReLU','ReLU','max(0, z)：负数变 0，正数不变。','max(0, z): negatives become 0, positives pass through.','s2'],
gelu:['GELU','GELU','ReLU 的平滑版本，GPT-2 和 BERT 使用。','A smooth relative of ReLU, used by GPT-2 and BERT.','s2'],
neuron:['神经元','neuron','计算 φ(w·x + b) 的单元。名字来自生物学，但只是这个公式。','A unit computing φ(w·x + b). The name comes from biology, but it is only this formula.','s2'],
layer:['层','layer','许多神经元读同一个输入并行计算：h = φ(xW + b)。在 Transformer 中，“层”常指整个块。','Many neurons reading the same input in parallel: h = φ(xW + b). In Transformers, “layer” often means a whole block.','s3'],
linear:['线性变换','linear map','只做拉伸、旋转、翻转、剪切的变换，形如 xW。保持直线和原点。','A map that only stretches, rotates, flips or shears, of the form xW. Keeps lines straight and the origin fixed.','s5'],
affine:['仿射变换','affine map','线性变换再加平移：xW + b。两个仿射变换的合成仍是仿射变换。','A linear map plus a shift: xW + b. Two affine maps compose into one affine map.','s5'],
hidden:['隐藏层','hidden layer','位于输入与输出之间的层。“隐藏”指训练数据没有规定它的值，而不是看不到。','A layer between input and output. “Hidden” means the training data does not specify its values, not that they cannot be seen.','s4'],
width:['宽度','width','一层中神经元的个数，也就是激活向量的维度。LLM 中常指 hidden_size。','The number of neurons in a layer, i.e. the dimension of its activation vector. In LLMs, usually hidden_size.','s4'],
depth:['深度','depth','依次相连的层数。LLM 中常指 Transformer 块的数量 num_hidden_layers。','The number of layers in sequence. In LLMs, usually the number of Transformer blocks, num_hidden_layers.','s4'],
mlp:['MLP 子层','MLP sublayer','Transformer 块中“扩宽—非线性—投影回来”的部分，对每个位置独立计算。也叫前馈网络（FFN）。','The “widen, nonlinearity, project back” part of a Transformer block, computed independently per position. Also called the feed-forward network (FFN).','s5']
};


Object.assign(Q,{
c11q1:{k:'pred',q:['两家公司使用同一个开源推理引擎、同样的代码版本，但加载了不同的权重文件（形状相同）。它们对同一个问题的回答会怎样？','Two companies run the same open-source inference engine, same code version, but load different weight files (with the same shapes). How will their answers to the same question compare?'],c:[
 ['完全一样，因为代码一样','Identical, because the code is identical','代码只定义计算的结构；结果取决于填入的参数。实验 1.1 中同一段代码给出了 XOR、AND、OR 三种行为。','Code only defines the structure of the computation; the result depends on the parameters filled in. In Lab 1.1, one piece of code gave XOR, AND and OR behaviour.',0],
 ['可能完全不同','They may be completely different','正确。行为几乎完全由参数决定。这也是为什么同一个推理引擎可以运行许多不同的模型。','Correct. Behaviour is determined almost entirely by the parameters, which is why one inference engine can run many different models.',1],
 ['只在措辞上略有不同','Only slightly different wording','差异没有上限：不同权重可以是完全不同的模型。','There is no bound on the difference: different weights can be entirely different models.',0],
 ['无法运行，因为权重必须与代码一起训练','They cannot run; weights must be trained together with the code','只要形状与配置匹配，代码可以加载任何权重。','As long as shapes and config match, the code can load any weights.',0]]},
c11q2:{k:'err',q:['找错：“模型知道法国的首都是巴黎，是因为模型代码里有一条处理这类问题的规则。”','Spot the error: “The model knows Paris is the capital of France because its code contains a rule for this kind of question.”'],c:[
 ['没有错','No error','推理代码对所有任务都相同，里面没有关于地理的规则。','Inference code is the same for every task; it contains no rules about geography.',0],
 ['错：这种行为来自训练得到的参数，分布在大量数字中，代码只负责计算','Wrong: the behaviour comes from trained parameters spread across many numbers; the code only computes','正确。这也意味着你无法在代码或参数里“查到”这条事实所在的那一行。','Correct. It also means you cannot look up the line of code or the parameter where this fact lives.',1],
 ['错：它来自配置文件','Wrong: it comes from the config file','配置只包含结构数字（层数、宽度等）。','The config only holds structural numbers (layer count, width, etc.).',0],
 ['错：它来自分词器的词表','Wrong: it comes from the tokenizer vocabulary','词表只规定如何切分文本和编号，不包含事实。','The vocabulary only defines how text is split and numbered; it holds no facts.',0]]},
c12q1:{k:'pred',q:['在实验 1.2 中，你从“d1–d2”视图切换到“d2–d5”视图。下面哪项会改变？','In Lab 1.2 you switch from the d1–d2 view to the d2–d5 view. Which of these changes?'],c:[
 ['猫与老虎的 6 维 cos 相似度','The 6-D cosine similarity of cat and tiger','相似度用完整的 6 个分量计算，与你选哪两维来画无关。','Similarity uses all 6 components, regardless of which two you plot.',0],
 ['图上点与点之间的距离','The distances between points on the plot','正确。投影只保留两个分量，换一对分量，看上去的远近就变了；向量本身没有任何变化。','Correct. A projection keeps only two components; switching which two changes how near things look, while the vectors themselves do not change at all.',1],
 ['向量本身的数值','The vectors\' values themselves','画图不会修改数据。','Plotting does not modify data.',0],
 ['以上都会改变','All of the above','只有图上的距离改变。','Only the on-plot distances change.',0]]},
c13q1:{k:'pred',q:['同一个模型实例先处理一个 10 token 的请求，再处理一个 2000 token 的请求。下面哪项基本不变？','The same model instance serves a 10-token request, then a 2000-token request. Which is essentially unchanged?'],c:[
 ['显存中的参数','The parameters in GPU memory','正确。参数加载一次，被所有请求共享读取。','Correct. Parameters are loaded once and read by every request.',1],
 ['每层激活值的大小','The size of each layer\'s activations','激活值形状为 [n, d]，随 n 增长 200 倍。','Activations are [n, d] and grow 200× with n.',0],
 ['KV 缓存大小','The KV cache size','KV 缓存随 token 数线性增长（7.3）。','The KV cache grows linearly with token count (7.3).',0],
 ['总显存占用','Total GPU memory use','参数不变，但运行时数据增长，总量也随之增长。','Parameters are fixed, but runtime data grows, so the total does too.',0]]},
c13q2:{k:'err',q:['找错：“GPT-2 的 safetensors 文件约 548 MB，所以它有约 5.48 亿个参数。”','Spot the error: “GPT-2\'s safetensors file is about 548 MB, so it has about 548 million parameters.”'],c:[
 ['没有错','No error','字节数不等于参数个数，要除以每个数的字节数。','Bytes are not parameters; divide by bytes per number.',0],
 ['错：FP32 每个参数 4 字节，约 1.24 亿个参数；文件里还有非参数的缓冲区','Wrong: FP32 uses 4 bytes per parameter, giving about 124 million parameters; the file also holds non-parameter buffers','正确。124,439,808 × 4 B ≈ 498 MB，其余约 50 MB 我们推断来自保存的因果掩码缓冲区。','Correct. 124,439,808 × 4 B ≈ 498 MB; we infer the remaining ~50 MB comes from stored causal-mask buffers.',1],
 ['错：每个参数 2 字节，所以有 2.74 亿个','Wrong: 2 bytes per parameter, so 274 million','这个文件以 FP32（4 字节）存储。','This file stores FP32 (4 bytes).',0],
 ['错：文件大小与参数无关','Wrong: file size is unrelated to parameters','几乎全部文件大小都来自参数。','Almost all of the file size comes from parameters.',0]]},
c14q1:{k:'calc',q:['一个 13B 参数的稠密模型以 BF16（每个数 2 字节）存储权重。只算权重，约需多少显存？','A 13B-parameter dense model stores weights in BF16 (2 bytes per number). Weights alone need about how much memory?'],c:[
 ['13 GB','13 GB','这是每个参数 1 字节（如 INT8）的情况。','That would be 1 byte per parameter (e.g. INT8).',0],
 ['26 GB（约 24.2 GiB）','26 GB (about 24.2 GiB)','正确。13×10⁹ × 2 B = 26×10⁹ B。注意 GB（10⁹）与 GiB（2³⁰ ≈ 1.074×10⁹）的区别。运行时还要加上 KV 缓存等（7.5）。','Correct. 13×10⁹ × 2 B = 26×10⁹ B. Note GB (10⁹) versus GiB (2³⁰ ≈ 1.074×10⁹). Runtime adds the KV cache and more (7.5).',1],
 ['52 GB','52 GB','这是 FP32（4 字节）的情况。','That is FP32 (4 bytes).',0],
 ['取决于上下文长度','Depends on context length','权重大小与上下文长度无关；KV 缓存才与之有关。','Weight size is independent of context length; the KV cache is not.',0]]},
c21q1:{k:'calc',q:['激活值 X 形状 [4, 16, 768]（4 个序列，每个 16 个 token）。X[2] 和 X[:, 0, :] 的形状分别是？','Activations X have shape [4, 16, 768] (4 sequences of 16 tokens). What are the shapes of X[2] and X[:, 0, :]?'],c:[
 ['[16, 768] 和 [4, 768]','[16, 768] and [4, 768]','正确。X[2] 固定第一个轴（第 3 个序列）；X[:, 0, :] 固定第二个轴（每个序列的第 1 个 token）。','Correct. X[2] fixes the first axis (the third sequence); X[:, 0, :] fixes the second axis (the first token of every sequence).',1],
 ['[768] 和 [4]','[768] and [4]','每固定一个下标只去掉一个轴。','Each fixed index removes only one axis.',0],
 ['[4, 768] 和 [16, 768]','[4, 768] and [16, 768]','顺序反了。','Swapped.',0],
 ['[2, 16, 768] 和 [4, 16]','[2, 16, 768] and [4, 16]','X[2] 选的是一个序列，不是两个。','X[2] selects one sequence, not two.',0]]},
c21q2:{k:'pred',q:['[8, 128, 4096] 的激活值乘以形状 [4096, 11008] 的权重，再加形状 [11008] 的偏置。结果形状？偏置是怎样加上去的？','Activations [8, 128, 4096] are multiplied by weights [4096, 11008], then a bias [11008] is added. Result shape? How is the bias applied?'],c:[
 ['[8, 128, 11008]；同一个偏置通过广播加到全部 8×128 个位置上','[8, 128, 11008]; the same bias is broadcast to all 8×128 positions','正确。最后一个轴 4096 被消掉，前置轴保留。偏置只有 11008 个数，被重复使用 1024 次。','Correct. The last axis 4096 disappears and the leading axes remain. The bias has only 11008 numbers, reused 1024 times.',1],
 ['[8, 11008]；偏置加到每个序列上','[8, 11008]; the bias is added per sequence','序列轴 128 不会消失。','The sequence axis 128 does not disappear.',0],
 ['形状不匹配','Shape mismatch','4096 与 4096 匹配。','4096 matches 4096.',0],
 ['[8, 128, 11008]；每个位置有自己的偏置','[8, 128, 11008]; each position has its own bias','偏置是参数，所有位置共享。','The bias is a parameter shared by all positions.',0]]},
c25q1:{k:'pred',q:['把分数 (5, 3, 1) 全部减去 5，变成 (0, −2, −4)。softmax 结果会怎样？','Subtract 5 from every score in (5, 3, 1), giving (0, −2, −4). What happens to the softmax result?'],c:[
 ['完全不变','Exactly unchanged','正确。平移不变性：只有差值有意义。代码实现中正是利用这一点先减去最大值来避免数值溢出。','Correct. Shift invariance: only differences matter. Implementations exploit this by subtracting the maximum first to avoid overflow.',1],
 ['第一项变成 0','The first entry becomes 0','分数为 0 时 e⁰ = 1，不是 0；softmax 输出不会为 0。','A score of 0 gives e⁰ = 1, not 0; softmax outputs are never 0.',0],
 ['变得更平均','It becomes more uniform','差值没变，所以分布没变。','The differences did not change, so the distribution did not either.',0],
 ['出现负数','Negative values appear','e 的任意次方都是正数。','e to any power is positive.',0]]},
c25q2:{k:'pred',q:['温度从 1 降到 0.25（分数除以 0.25，即乘以 4）。最大项的权重会？','Temperature drops from 1 to 0.25 (scores divided by 0.25, i.e. multiplied by 4). The largest entry\'s weight will…'],c:[
 ['增大，分布更“尖”','Increase; the distribution sharpens','正确。差距放大 4 倍。T 趋近 0 时，最大项趋近 1（等同于总是选最大值）。','Correct. Gaps are multiplied by 4. As T approaches 0, the largest entry approaches 1 (equivalent to always picking the maximum).',1],
 ['减小','Decrease','降低温度是放大差距，不是缩小。','Lowering temperature widens gaps, not narrows them.',0],
 ['不变','Stay the same','缩放会改变 softmax（与平移不同）。','Scaling changes softmax (unlike shifting).',0],
 ['变成 0.25','Become 0.25','温度不是直接设定权重。','Temperature does not set the weights directly.',0]]},
c25q3:{k:'err',q:['找错：“输出层对答案 A 给出 softmax 概率 0.92，所以 A 有 92% 的可能是对的。”','Spot the error: “The output layer gives answer A a softmax probability of 0.92, so A is 92% likely to be correct.”'],c:[
 ['没有错','No error','softmax 的形式不保证校准。','The softmax form does not guarantee calibration.',0],
 ['错：0.92 是模型对下一个 token 的预测分布；它是否等于真实正确率（校准）需要另外检验','Wrong: 0.92 is the model\'s predicted distribution over the next token; whether it matches real accuracy (calibration) must be checked separately','正确。另外，0.92 只是某一个 token 的概率，一个答案通常由多个 token 组成。','Correct. Also, 0.92 is the probability of one token, while an answer usually spans several tokens.',1],
 ['错：softmax 的输出总是 0 或 1','Wrong: softmax outputs are always 0 or 1','softmax 输出在 0 到 1 之间连续变化。','Softmax outputs vary continuously between 0 and 1.',0],
 ['错：应该乘以温度','Wrong: it should be multiplied by temperature','这与温度无关。','Temperature is not the issue.',0]]}
});
Object.assign(E,{
c12e1:{k:'expl',q:['用自己的话解释：为什么不能直接把 token ID（例如 5012）作为数字送进神经网络的矩阵乘法？向量表示解决了什么问题？','In your own words: why can\'t a token ID (e.g. 5012) be fed directly as a number into a network\'s matrix multiplications? What problem does a vector representation solve?'],
 a:['矩阵乘法会把输入当作“大小有意义的量”：输入乘以权重再相加，ID 越大贡献越大。但 ID 的大小是任意分配的，5012 并不比 17 “多”任何东西，相邻的 ID 也不代表意思相近，所以对 ID 做乘加会产生毫无意义的结果。向量表示给每个 token 一串（几百到几千个）可学习的数，训练可以把它们调整到“用法相似的 token 得到相似的向量”，于是点积、相加、矩阵乘法都变成有意义的操作：比较相似度、混合信息、改写描述。每个 token 的信息可以分布在许多维度上，而不是挤进一个编号里。','A matrix multiplication treats inputs as quantities whose size matters: input times weight, summed, so a bigger ID would contribute more. But IDs are assigned arbitrarily: 5012 is not “more” than 17 in any sense, and neighbouring IDs do not mean similar words, so multiply-and-add on IDs produces meaningless results. A vector representation gives each token a list of hundreds or thousands of learnable numbers, which training can arrange so that tokens used similarly get similar vectors. Then dot products, addition and matrix multiplication become meaningful: comparing similarity, mixing information, rewriting descriptions. Each token\'s information can be spread over many dimensions instead of being squeezed into one number.']},
c14e1:{k:'err',q:['有人说：“模型 B 有 70B 参数，模型 A 只有 8B，所以 B 知道的事实大约是 A 的 9 倍，回答也一定更好。”指出这句话中至少两个问题。','Someone says: “Model B has 70B parameters and model A only 8B, so B knows about 9× as many facts and must give better answers.” Identify at least two problems.'],
 a:['(1) 参数量不是事实条数：知识分散存储在参数中，不存在“每个参数存一条”的对应关系，所以“9 倍的事实”没有依据。(2) 能力不只取决于参数量，还取决于训练数据的数量和质量、训练计算量、训练方法（包括微调和偏好优化）。一个用更多高质量数据训练的较小模型可以胜过训练不足的大模型（Chinchilla 的结论）。(3) “一定更好”忽略了任务差异：在特定任务上，较小但经过针对性微调的模型可能更好。(4) 若 B 是混合专家模型，70B 可能是总参数，每个 token 的激活参数要少得多。参数量真正能直接告诉你的是存储需求和每个 token 的大致计算量。','(1) Parameter count is not a count of facts: knowledge is stored in a distributed way, with no “one parameter, one fact” correspondence, so “9× the facts” has no basis. (2) Capability depends not only on parameter count but on the quantity and quality of training data, training compute and training method (including fine-tuning and preference optimization). A smaller model trained on more high-quality data can beat an under-trained larger one (the Chinchilla finding). (3) “Must be better” ignores task differences: a smaller model fine-tuned for a task may do better on it. (4) If B is a mixture-of-experts model, 70B may be the total, with far fewer active parameters per token. What a parameter count does tell you directly is the storage requirement and approximate compute per token.']}
});
Object.assign(G,{
representation:['表示','representation','代表一个 token 或位置的向量。初始表示来自嵌入表，上下文表示由各层计算得到。','The vector standing for a token or position. Initial representations come from the embedding table; contextual ones are computed by the layers.','c12'],
config:['配置文件','config','描述模型结构的小文件（层数、宽度、头数、词表大小等），代码据此确定各张量的形状。','A small file describing the model\'s structure (layers, width, heads, vocabulary size…), from which the code determines tensor shapes.','c11'],
safetensors:['safetensors','safetensors','一种权重文件格式：JSON 文件头列出各张量的名称、形状、类型与位置，后面是原始字节。','A weights file format: a JSON header lists each tensor\'s name, shape, dtype and offset, followed by the raw bytes.','c13'],
paramcount:['参数量','parameter count','所有参数张量中数字的总数，决定存储与每个 token 的计算量，不是知识条数。','The total number of numbers in all parameter tensors; sets storage and per-token compute; not a count of facts.','c14'],
moe:['混合专家','mixture of experts (MoE)','每个 token 只经过部分 MLP（专家）的架构；总参数决定显存，激活参数决定计算量。','An architecture where each token passes through only some MLPs (experts); total parameters set memory, active parameters set compute.','c14'],
axis:['轴','axis','张量的一个方向；形状列出每个轴的长度。','One direction of a tensor; the shape lists each axis\'s length.','c21'],
broadcast:['广播','broadcasting','形状较小的张量在运算中被自动重复使用，例如把偏置 [d] 加到 [n, d] 的每一行。','Automatic reuse of a smaller tensor in an operation, such as adding a bias [d] to every row of [n, d].','c21'],
batch:['批次','batch','同时处理的多个序列，通常是张量的第一个轴。','Several sequences processed together, usually the first axis of a tensor.','c21'],
softmax:['softmax','softmax','e^z 再除以总和，把任意分数变成非负、和为 1 的权重。平移不变，对缩放敏感。','Exponentiate then divide by the total, turning arbitrary scores into non-negative weights summing to 1. Shift-invariant, scale-sensitive.','c25'],
temperature:['温度','temperature','softmax 前把分数除以的正数；越小分布越尖，越大越平。','A positive number scores are divided by before softmax; smaller sharpens, larger flattens.','c25'],
calibration:['校准','calibration','模型给出的概率是否与实际正确率相符。','Whether a model\'s stated probabilities match its actual accuracy.','c25']
});


Object.assign(Q,{
c41q1:{k:'err',q:['找错：“token ID 4512 和 4513 相邻，所以模型认为这两个 token 意思接近。”','Spot the error: “Token IDs 4512 and 4513 are adjacent, so the model treats the two tokens as similar in meaning.”'],c:[
 ['没有错','No error','ID 只是行号，模型从不比较 ID 的大小。','An ID is only a row number; the model never compares ID sizes.',0],
 ['错：ID 只用来选嵌入表的一行；相似性只可能体现在两行向量的内容上','Wrong: an ID only selects a row of the embedding table; any similarity can only show up in the contents of the two rows','正确。ID 的排列反映词表构建过程（例如合并顺序），与意思无关。','Correct. ID order reflects how the vocabulary was built (e.g. merge order), not meaning.',1],
 ['错：相邻 ID 意思一定相反','Wrong: adjacent IDs must have opposite meanings','ID 顺序与意思没有任何系统关系，既不相近也不相反。','There is no systematic relationship between ID order and meaning, neither similar nor opposite.',0],
 ['只在中文模型中错','Wrong only for Chinese models','对所有模型都一样。','It is the same for every model.',0]]},
c41q2:{k:'pred',q:['同一段中文分别用 GPT-2 的分词器和 Llama 3 的分词器处理。哪个说法最可能正确？','The same Chinese text is tokenized with GPT-2\'s tokenizer and with Llama 3\'s. Which statement is most likely correct?'],c:[
 ['token 数相同，因为文字相同','Same token count, because the text is the same','token 数取决于词表。','Token count depends on the vocabulary.',0],
 ['GPT-2 通常得到更多 token，因为它的词表较小、中文覆盖少，常把汉字拆成字节','GPT-2 usually produces more tokens, since its smaller vocabulary covers little Chinese and often splits characters into bytes','正确。更多 token 意味着同样的上下文窗口装得下的文字更少，计算和费用也更高。实际数字请用分词器实测。','Correct. More tokens means less text fits in the same context window, and more compute and cost. Measure actual numbers with the tokenizers.',1],
 ['Llama 3 一定把每个汉字切成 3 个 token','Llama 3 always splits each character into 3 tokens','只有词表外的字符才退回字节；常见汉字在大词表中通常是单个 token。','Only characters missing from the vocabulary fall back to bytes; common characters are usually single tokens in a large vocabulary.',0],
 ['无法比较','They cannot be compared','可以直接计数比较。','You can simply count and compare.',0]]},
c42q1:{k:'calc',q:['词表 V = 32000，d = 4096。嵌入表有多少参数？一个 100 token 的输入经过查表后得到什么形状？','Vocabulary V = 32000, d = 4096. How many parameters does the embedding table have? What shape results from looking up a 100-token input?'],c:[
 ['131,072,000；[100, 4096]','131,072,000; [100, 4096]','正确。32000 × 4096。查表只读其中 100 行（可能有重复），得到 [n, d]。','Correct. 32000 × 4096. The lookup reads just 100 rows (possibly repeated), giving [n, d].',1],
 ['409,600；[100, 4096]','409,600; [100, 4096]','这是 100 × 4096，即查表结果的大小，不是整张表。','That is 100 × 4096, the size of the lookup result, not the table.',0],
 ['131,072,000；[32000, 4096]','131,072,000; [32000, 4096]','查表结果只包含被查的 100 行。','The result contains only the 100 rows looked up.',0],
 ['36,096；[100]','36,096; [100]','参数个数是乘积，不是和。','The count is a product, not a sum.',0]]},
c42q2:{k:'pred',q:['句子“我喜欢猫，你喜欢狗”中的两个“喜欢”，在嵌入查表之后（加位置信息之前）的向量关系是？','After embedding lookup (before any position information), how do the vectors for the two “the”s in “the cat saw the dog” compare?'],c:[
 ['完全相同','Exactly identical','正确。同一个 ID 取同一行。区分它们要靠位置信息（4.3）和后续层的上下文（4.5）。','Correct. Same ID, same row. Telling them apart takes position information (4.3) and context from later layers (4.5). (If one is sentence-initial “the” and the other “ the”, they are different tokens, see 4.1.)',1],
 ['略有不同，因为上下文不同','Slightly different, because the contexts differ','查表阶段还没有任何上下文。','No context is involved at the lookup stage.',0],
 ['方向相反','Opposite directions','没有任何机制让它们相反。','No mechanism makes them opposite.',0],
 ['第二个被设为零向量','The second is set to zero','重复的 token 不会被清零。','Repeated tokens are not zeroed.',0]]},
c43q1:{k:'pred',q:['一个使用学习的绝对位置嵌入、表长 1024 的模型（如 GPT-2），收到 1500 个 token 的输入。会发生什么？','A model with learned absolute position embeddings and a table of 1024 rows (like GPT-2) receives a 1500-token input. What happens?'],c:[
 ['正常运行，因为 RoPE 可以外推','It runs fine, because RoPE extrapolates','这个模型用的是位置表，不是 RoPE。','This model uses a position table, not RoPE.',0],
 ['第 1025 个及之后的位置在表中没有对应行，必须截断或拒绝输入','Positions 1025 onward have no row in the table, so the input must be truncated or rejected','正确。这是“上下文长度上限”最直接的一种来源。实际服务通常会截断较早的内容或报错。','Correct. This is one of the most direct sources of a context-length limit. Real services usually truncate earlier content or return an error.',1],
 ['后面的位置自动复用前面的行','Later positions automatically reuse earlier rows','没有这样的机制，即使强行这样做也会混淆位置。','There is no such mechanism; forcing it would confuse positions.',0],
 ['只是变慢','It just gets slower','问题不在速度，而在表中不存在这些位置。','The issue is not speed but that the positions do not exist in the table.',0]]},
c44q1:{k:'pred',q:['把送进 RMSNorm 的向量整体乘以 10，输出会怎样（γ 不变）？','If the vector entering RMSNorm is multiplied by 10 (γ unchanged), what happens to the output?'],c:[
 ['不变','Unchanged','正确。分子和 RMS 都乘以 10，相互抵消（忽略 ε）。这就是归一化让后续计算不受输入尺度影响的方式。','Correct. Numerator and RMS both scale by 10 and cancel (ignoring ε). This is how normalization shields later computation from input scale.',1],
 ['也乘以 10','Also multiplied by 10','RMS 同样变为 10 倍，抵消了。','The RMS also becomes 10×, cancelling it.',0],
 ['变为 1/10','Divided by 10','方向反了。','Wrong direction.',0],
 ['变为全零','All zeros','只有输入为零向量时才会这样。','Only a zero input would do that.',0]]},
c44q2:{k:'err',q:['找错：“残差连接意味着每一层用自己的输出替换掉上一层的表示。”','Spot the error: “A residual connection means each layer replaces the previous representation with its own output.”'],c:[
 ['没有错','No error','“替换”恰恰是残差连接要避免的。','“Replacing” is exactly what residual connections avoid.',0],
 ['错：子层输出被<b>加到</b>原表示上，x ← x + f(Norm(x))，原有信息默认保留','Wrong: the sublayer output is <b>added</b> to the existing representation, x ← x + f(Norm(x)), so prior information is kept by default','正确。这也让误差信号在训练时能沿着“+”这条捷径直接传回前面的层。','Correct. It also lets the error signal in training flow straight back to earlier layers along the “+” shortcut.',1],
 ['错：残差连接只在训练时使用','Wrong: residual connections are used only in training','推理时同样使用，它是模型结构的一部分。','They are used in inference too; they are part of the architecture.',0],
 ['错：残差连接会把向量归一化','Wrong: residual connections normalize the vector','归一化是另一个操作。','Normalization is a separate operation.',0]]}
});
Object.assign(E,{
c45e1:{k:'expl',q:['用自己的话解释：“苹果”在第 0 层和第 20 层的向量有什么不同？哪些计算造成了这种不同？哪些东西在两句话之间完全相同？','In your own words: how does the vector for “apple” at layer 0 differ from layer 20? Which computations cause the difference? What is identical between the two sentences?'],
 a:['第 0 层：向量来自嵌入表的同一行（加上位置信息），两句话中“苹果”的 token 部分完全相同。之后每个块往残差流上加两个增量：注意力的增量把前文其他位置的信息混合进来；MLP 的增量依据当前向量做逐位置的变换。因为两句话的前文不同、位置不同，注意力混进来的内容不同，后续的 MLP 又在不同的输入上计算，所以到第 20 层两者已经明显不同。两句话之间完全相同的是：全部参数（嵌入表、各层权重）以及计算规则本身。不同的只是激活值。','At layer 0 the vector comes from the same embedding row (plus position information), so the token part of “apple” is identical in both sentences. Each block then adds two updates to the residual stream: attention mixes in information from preceding positions, and the MLP transforms each position based on its current vector. Because the preceding context and positions differ, attention mixes in different content, and the MLPs then compute on different inputs, so by layer 20 the vectors differ substantially. What is identical across the two sentences: all the parameters (embedding table, every layer\'s weights) and the computation rules themselves. Only the activations differ.']}
});
Object.assign(G,{
tokenizer:['分词器','tokenizer','把文本切成词表中的片段并映射为 ID 的程序与数据，与权重分开存放但必须配套使用。','The program and data that split text into vocabulary pieces and map them to IDs; stored separately from the weights but must match them.','c41'],
tokenid:['token ID','token ID','0 到 V−1 的整数，唯一用途是作为嵌入表的行号；大小没有语义。','An integer from 0 to V−1 whose only use is as a row number in the embedding table; its size carries no meaning.','c41'],
bpe:['字节对编码','BPE (byte-pair encoding)','从字节开始，反复合并最常见的相邻片段来构建词表的方法。','Building a vocabulary by starting from bytes and repeatedly merging the most frequent adjacent pair.','c41'],
special:['特殊 token','special token','BOS、EOS、对话角色标记等不对应普通文字的 token。','Tokens such as BOS, EOS and chat-role markers that do not correspond to ordinary text.','c41'],
embedding:['嵌入矩阵','embedding matrix','形状 [V, d] 的参数表，第 k 行是 ID 为 k 的 token 的初始向量。','A [V, d] parameter table whose row k is the initial vector of token k.','c42'],
onehot:['独热向量','one-hot vector','只有一个位置为 1、其余为 0 的向量；与矩阵相乘等于取一行。','A vector with a single 1 and zeros elsewhere; multiplying it by a matrix picks one row.','c42'],
tying:['权重共享','weight tying','输出层直接复用嵌入矩阵（如 GPT-2）。','The output layer reuses the embedding matrix (e.g. GPT-2).','c42'],
posemb:['位置嵌入','position embedding','加到 token 嵌入上的、按位置索引的参数向量（如 GPT-2 的 wpe）。','A parameter vector indexed by position, added to the token embedding (e.g. GPT-2\'s wpe).','c43'],
rope:['旋转位置编码','RoPE','按位置旋转 Q、K 的分量对，使注意力分数依赖相对位置；无参数。','Rotates component pairs of Q and K by position so attention scores depend on relative position; parameter-free.','c43'],
residual:['残差流','residual stream','每个位置贯穿所有层的向量；各子层把输出加到它上面。形状始终为 [n, d_model]。','Each position\'s vector running through all layers; every sublayer adds its output to it. Always [n, d_model].','c44'],
layernorm:['层归一化','LayerNorm','减均值、除以标准差，再逐分量缩放 γ、平移 β。','Subtract the mean, divide by the standard deviation, then scale by γ and shift by β per component.','c44'],
rmsnorm:['RMS 归一化','RMSNorm','除以均方根再缩放 γ；不减均值，Llama 系列使用。','Divide by the root-mean-square, then scale by γ; no mean subtraction; used by Llama.','c44'],
contextual:['上下文表示','contextual representation','经过若干层后、已融入可见上下文信息的位置向量。','A position\'s vector after some layers, incorporating information from its visible context.','c45']
});


Object.assign(Q,{
c51q1:{k:'pred',q:['在一个 Transformer 块里，如果把注意力子层整个删掉（只保留归一化、MLP 和残差），会失去什么能力？','If the attention sublayer were removed from a Transformer block (keeping normalization, MLP and residuals), what ability would be lost?'],c:[
 ['位置之间传递信息的能力：每个位置只能依据自己的 token 和位置计算','Passing information between positions: each position could only compute from its own token and position','正确。块中只有注意力会混合不同位置。没有它，模型对“猫”的处理与前文无关，只能做类似“根据当前 token 猜下一个”的事。','Correct. Only attention mixes positions in a block. Without it, processing “cat” would ignore all preceding text, reducing the model to something like guessing the next token from the current one.',1],
 ['非线性：模型会变成线性的','Nonlinearity: the model becomes linear','MLP 中的激活函数仍然提供非线性。','The MLP\'s activation still provides nonlinearity.',0],
 ['处理长文本的能力，但短文本不受影响','Long-text ability only; short texts unaffected','即使只有两个 token，第二个也需要注意力才能用到第一个的信息。','Even with two tokens, the second needs attention to use the first\'s information.',0],
 ['没有影响，MLP 可以替代','No effect; the MLP can replace it','MLP 对每个位置独立计算，无法替代。','The MLP works per position and cannot replace it.',0]]},
c52q1:{k:'err',q:['找错：“Q、K、V 是存储在模型文件里的三个矩阵。”','Spot the error: “Q, K and V are three matrices stored in the model file.”'],c:[
 ['没有错','No error','存储的是投影矩阵，不是 Q、K、V。','What is stored are the projection matrices, not Q, K, V.',0],
 ['错：存储的是参数 W_Q、W_K、W_V；Q、K、V 是每次输入时由 X 乘这些矩阵算出的激活值','Wrong: the stored parameters are W_Q, W_K, W_V; Q, K and V are activations computed from X times those matrices for each input','正确。所以 Q、K、V 的大小随 n 变化，而 W 的大小不变。','Correct. That is why Q, K, V grow with n while the W matrices do not.',1],
 ['错：Q、K、V 存在分词器里','Wrong: Q, K, V live in the tokenizer','分词器与注意力无关。','The tokenizer is unrelated to attention.',0],
 ['错：只有 V 存储在文件里','Wrong: only V is stored','三者都不存储；存储的是三个投影矩阵。','None are stored; the three projection matrices are.',0]]},
c52q2:{k:'pred',q:['如果把 W_K 改成与 W_Q 完全相同，下面哪项一定成立？','If W_K were set identical to W_Q, which must hold?'],c:[
 ['位置 i 对 j 的分数等于 j 对 i 的分数','Position i\'s score for j equals j\'s score for i','正确。此时 k = q，q_i·q_j = q_j·q_i，分数矩阵对称，模型就无法表达“我需要你，但你不需要我”。','Correct. Then k = q and q_i·q_j = q_j·q_i, so the score matrix is symmetric and the model cannot express “I need you but you do not need me”.',1],
 ['所有权重都变成相等','All weights become equal','分数仍随内容变化。','Scores still vary with content.',0],
 ['V 也会等于 Q','V would also equal Q','W_V 没变。','W_V is unchanged.',0],
 ['因果掩码失效','The causal mask stops working','掩码与 W 无关。','The mask does not depend on W.',0]]},
c53q1:{k:'calc',q:['实验 5.3 中掩码打开时，位置 2 的权重约为 (0.986, 0.014, 0, 0)。为什么位置 3、4 的权重是 0？','In Lab 5.3 with the mask on, position 2\'s weights are about (0.986, 0.014, 0, 0). Why are positions 3 and 4 at 0?'],c:[
 ['它们的分数是 −∞，e^−∞ = 0：位置 2 不能看到之后的位置','Their scores are −∞ and e^−∞ = 0: position 2 cannot see later positions','正确。即使 q₂·k₃ = 3 是一个不小的分数，掩码也会把它变为 −∞。','Correct. Even though q₂·k₃ = 3 is a sizeable score, the mask turns it into −∞.',1],
 ['因为它们的点积是负数','Because their dot products are negative','q₂·k₃ = 3、q₂·k₄ = 3，是正数。','q₂·k₃ = 3 and q₂·k₄ = 3 are positive.',0],
 ['因为缩放除以了 √2','Because of dividing by √2','缩放不会把任何分数变成 0 权重。','Scaling never produces zero weight.',0],
 ['四舍五入的结果','Rounding','它们是精确的 0。','They are exactly 0.',0]]},
c53q2:{k:'pred',q:['d_k 从 2 增大到 128，如果<b>不</b>除以 √d_k，softmax 后的权重通常会怎样？','If d_k grew from 2 to 128 and scores were <b>not</b> divided by √d_k, what would typically happen to the softmax weights?'],c:[
 ['更接近均匀','Closer to uniform','分数变大会让分布更尖，不是更平。','Larger scores sharpen, not flatten.',0],
 ['极端集中在少数位置上（接近独热分布），训练时梯度很小','Extremely concentrated on a few positions (nearly one-hot), with tiny gradients in training','正确。分数的典型大小随 √d_k 增长，softmax 对缩放敏感（2.5）。除以 √d_k 正是为了抵消这一点。','Correct. Typical score size grows with √d_k, and softmax is scale-sensitive (2.5). Dividing by √d_k cancels this.',1],
 ['不受影响','Unaffected','softmax 不是缩放不变的。','Softmax is not scale-invariant.',0],
 ['全部变为 0','All become 0','每行仍然和为 1。','Each row still sums to 1.',0]]},
c53q3:{k:'calc',q:['n = 4096，32 个头。一层的注意力权重共有多少个数？','n = 4096, 32 heads. How many numbers do one layer\'s attention weights contain?'],c:[
 ['32 × 4096 ≈ 13 万','32 × 4096 ≈ 131 thousand','每个头的权重是 n × n，不是 n。','Each head\'s weights are n × n, not n.',0],
 ['32 × 4096² ≈ 5.4 亿','32 × 4096² ≈ 537 million','正确。[h, n, n] = 32 × 16,777,216 ≈ 5.37×10⁸。这说明为何实现上会避免完整存下它（D6），以及为何长上下文的注意力计算昂贵。','Correct. [h, n, n] = 32 × 16,777,216 ≈ 5.37×10⁸. This is why implementations avoid storing it in full (D6) and why long-context attention is costly.',1],
 ['4096²','4096²','还要乘以头数。','Multiply by the number of heads too.',0],
 ['与 n 无关','Independent of n','它随 n² 增长。','It grows with n².',0]]},
c54q1:{k:'err',q:['找错：“位置 3 的注意力权重中最大的是位置 2（0.503），所以位置 3 的输出就是位置 2 的值向量 v₂。”','Spot the error: “Position 3\'s largest attention weight is on position 2 (0.503), so position 3\'s output is position 2\'s value vector v₂.”'],c:[
 ['没有错','No error','输出是加权混合，不是挑选。','The output is a weighted mixture, not a pick.',0],
 ['错：输出是 0.248·v₁ + 0.503·v₂ + 0.248·v₃ ≈ (1.00, 1.51)，而 v₂ = (1, 3)','Wrong: the output is 0.248·v₁ + 0.503·v₂ + 0.248·v₃ ≈ (1.00, 1.51), while v₂ = (1, 3)','正确。约一半的内容来自其他位置。','Correct. About half of the content comes from other positions.',1],
 ['错：输出应是 v₃，因为每个位置只读自己','Wrong: the output should be v₃, as each position reads only itself','注意力的意义正在于读取其他位置。','The point of attention is to read other positions.',0],
 ['错：输出是权重本身','Wrong: the output is the weights themselves','权重用来加权 V，输出是向量。','Weights are applied to V; the output is a vector.',0]]},
c55q1:{k:'calc',q:['d_model = 4096，32 个头。每个头的 d_head 是多少？拼接后的形状是？','d_model = 4096 with 32 heads. What is d_head, and what is the shape after concatenation?'],c:[
 ['128；[n, 4096]','128; [n, 4096]','正确。4096 / 32 = 128；32 个 [n, 128] 拼成 [n, 4096]，再乘 W_O [4096, 4096]。','Correct. 4096 / 32 = 128; 32 outputs of [n, 128] concatenate to [n, 4096], then multiply by W_O [4096, 4096].',1],
 ['4096；[n, 131072]','4096; [n, 131072]','每个头的维度是 d_model / h，而不是 d_model。','Each head\'s dimension is d_model / h, not d_model.',0],
 ['128；[32, n, n]','128; [32, n, n]','[h, n, n] 是注意力权重的形状，不是拼接输出。','[h, n, n] is the attention-weight shape, not the concatenated output.',0],
 ['32；[n, 128]','32; [n, 128]','颠倒了。','Swapped.',0]]},
c55q2:{k:'err',q:['找错：“把单头注意力改成 32 头，参数量和矩阵乘法计算量都会增加约 32 倍。”','Spot the error: “Switching from single-head to 32-head attention multiplies parameters and matrix-multiplication compute by about 32.”'],c:[
 ['没有错','No error','d_head = d_model / h 时，投影矩阵的总大小不变。','With d_head = d_model / h, the total projection size is unchanged.',0],
 ['错：每头维度变为 d_model/32，所有头的投影合起来仍是 [d_model, d_model]，参数量不变','Wrong: each head has d_model/32 dimensions, so all heads\' projections together are still [d_model, d_model]; parameters are unchanged','正确。变化的是：分数矩阵从 1 张变为 32 张 [n, n]，每张用更小的 d_head 计算。','Correct. What changes: the score matrix goes from one to 32 tables of [n, n], each computed with a smaller d_head.',1],
 ['错：参数量减少 32 倍','Wrong: parameters shrink 32×','参数量不变。','Parameters are unchanged.',0],
 ['错：只增加 W_O','Wrong: only W_O grows','W_O 也是 [d_model, d_model]，单头时同样存在。','W_O is [d_model, d_model] in both cases.',0]]},
c56q1:{k:'pred',q:['在一个块中，“位置 7 的信息影响到位置 9”可能发生在哪里？','Within one block, where can information from position 7 influence position 9?'],c:[
 ['只在注意力子层','Only in the attention sublayer','正确。归一化、MLP、残差相加都逐位置计算。（经过多个块后，影响可以层层传递，但每一次跨位置传递都发生在某个注意力子层里。）','Correct. Normalization, MLP and residual addition all work per position. (Across blocks influence can propagate further, but every cross-position step happens inside some attention sublayer.)',1],
 ['只在 MLP 中','Only in the MLP','MLP 对每个位置独立计算。','The MLP computes each position independently.',0],
 ['在残差相加时','During the residual addition','残差相加是把同一位置的向量相加。','Residual addition adds vectors at the same position.',0],
 ['在归一化中','In normalization','归一化用的是同一位置向量自身的统计量。','Normalization uses statistics of the same position\'s own vector.',0]]},
c57q1:{k:'err',q:['找错：“热力图显示第 12 层第 7 头把 0.8 的注意力放在‘不’字上，所以模型的回答是因为‘不’字才变成否定的。”','Spot the error: “The heatmap shows layer 12, head 7 putting 0.8 attention on the word ‘not’, so the model\'s answer became negative because of ‘not’.”'],c:[
 ['没有错，权重直接说明原因','No error; weights directly show the cause','权重是混合比例，不是因果证据。','Weights are mixing proportions, not causal evidence.',0],
 ['错：这只是一个头一层的混合比例；贡献还取决于值向量、W_O 和后续所有层；要说明因果需要干预实验等其他证据','Wrong: it is one head\'s mixing proportions in one layer; contribution also depends on values, W_O and all later layers; a causal claim needs other evidence such as interventions','正确。“不”字可能确实重要，但这张图本身不足以证明。','Correct. “not” may well matter, but this map alone does not show it.',1],
 ['错：注意力权重总是均匀的','Wrong: attention weights are always uniform','权重可以很集中。','Weights can be highly concentrated.',0],
 ['错：第 12 层不存在注意力','Wrong: layer 12 has no attention','每个块都有注意力。','Every block has attention.',0]]}
});
Object.assign(E,{
c54e1:{k:'expl',q:['用自己的话，从 X 开始，依次说出单头注意力的每一步：输入是什么、产生了什么、形状是什么、哪些是参数。','In your own words, starting from X, list every step of single-head attention: what goes in, what comes out, the shape, and which things are parameters.'],
 a:['(1) X [n, d_model]：归一化后的残差流，激活值。(2) Q = X W_Q、K = X W_K、V = X W_V，各 [n, d_k]；三个 W 是参数，[d_model, d_k]。(3) 分数 S = Q Kᵀ [n, n]，第 (i, j) 项是 q_i·k_j。(4) 除以 √d_k 控制尺度。(5) 加因果掩码：j > i 的位置设为 −∞。(6) 对每行做 softmax 得到权重 A [n, n]，每行和为 1，被掩码的位置为 0。(7) 输出 O = A V [n, d_k]：每个位置得到可见位置值向量的加权混合。之后多头的输出拼接并乘 W_O（参数）回到 [n, d_model]，加回残差流。除 W_Q、W_K、W_V、W_O 外，所有中间结果都是激活值。','(1) X [n, d_model]: the normalized residual stream, activations. (2) Q = X W_Q, K = X W_K, V = X W_V, each [n, d_k]; the three W are parameters, [d_model, d_k]. (3) Scores S = Q Kᵀ [n, n]; entry (i, j) is q_i·k_j. (4) Divide by √d_k to control scale. (5) Add the causal mask: positions with j > i become −∞. (6) Softmax each row to get weights A [n, n], each row summing to 1, masked entries 0. (7) Output O = A V [n, d_k]: each position gets a weighted mixture of visible positions\' values. Then the heads\' outputs are concatenated and multiplied by W_O (a parameter) back to [n, d_model] and added to the residual stream. Apart from W_Q, W_K, W_V, W_O, every intermediate is an activation.']},
c56e1:{k:'expl',q:['画出（或写出）一个 GPT-2 块从输入到输出的完整流程，标出 n = 10 时每一步的形状，以及每一步是否使用参数。','Draw (or write) the complete flow of one GPT-2 block from input to output, with every shape for n = 10 and whether each step uses parameters.'],
 a:['输入 x [10, 768] → LayerNorm₁（参数 γ, β [768]）→ [10, 768] → c_attn（参数 [768, 2304]）→ [10, 2304]，切成 Q、K、V 各 [10, 768]，重排为 [12, 10, 64] → 分数 [12, 10, 10]（无参数）→ 缩放、掩码、softmax（无参数）→ 加权 V [12, 10, 64] → 拼接 [10, 768] → c_proj / W_O（参数 [768, 768]）→ [10, 768] → 加回 x（残差）→ LayerNorm₂（参数）→ c_fc（参数 [768, 3072]）→ [10, 3072] → GELU（无参数）→ c_proj（参数 [3072, 768]）→ [10, 768] → 加回 x → 输出 [10, 768]，与输入形状相同，交给下一个块。','Input x [10, 768] → LayerNorm₁ (parameters γ, β [768]) → [10, 768] → c_attn (parameter [768, 2304]) → [10, 2304], split into Q, K, V each [10, 768], reshaped to [12, 10, 64] → scores [12, 10, 10] (no parameters) → scale, mask, softmax (no parameters) → weighted V [12, 10, 64] → concatenate [10, 768] → c_proj / W_O (parameter [768, 768]) → [10, 768] → add to x (residual) → LayerNorm₂ (parameters) → c_fc (parameter [768, 3072]) → [10, 3072] → GELU (no parameters) → c_proj (parameter [3072, 768]) → [10, 768] → add to x → output [10, 768], same shape as the input, passed to the next block.']},
c57e1:{k:'expl',q:['同事给你看一张注意力热力图，说“你看，模型在想这个词”。你会如何回应？请至少给出三个具体理由，并建议一种更有力的证据。','A colleague shows you an attention heatmap and says “look, the model is thinking about this word”. How do you respond? Give at least three specific reasons and suggest stronger evidence.'],
 a:['理由：(1) 图只来自一个层的一个头，模型还有几百个其他头，它们的模式可能完全不同；(2) 权重是混合比例，实际贡献还取决于被关注位置的值向量大小以及 W_O，可能很小；(3) 这一层的输出还会经过 MLP 和后续许多层，与最终输出的关系很间接；(4) 研究显示不同的注意力分布有时能得到几乎相同的预测，所以权重分布不是唯一的“解释”。更有力的证据：做干预实验，例如把这个词替换掉或修改相关位置/层的激活值，观察输出是否按预期改变；或使用基于梯度的归因、因果追踪等方法，并在多个例子上检验，而不是只看一个例子。','Reasons: (1) the map comes from one head in one layer, while the model has hundreds of other heads whose patterns may be completely different; (2) weights are mixing proportions, and actual contribution also depends on the attended value vectors and on W_O, possibly small; (3) this layer\'s output passes through the MLP and many later layers, so its link to the final output is indirect; (4) studies show that different attention distributions can sometimes give nearly identical predictions, so the distribution is not a unique “explanation”. Stronger evidence: run interventions, e.g. replace the word or modify the relevant positions\'/layers\' activations, and check whether the output changes as predicted; or use gradient-based attribution or causal tracing, tested across many examples rather than one.']}
});
Object.assign(G,{
attention:['注意力','attention','每个位置按 softmax(QKᵀ/√d_k) 权重混合可见位置的值向量；块中唯一跨位置传递信息的部分。','Each position mixes visible positions\' value vectors with weights softmax(QKᵀ/√d_k); the only cross-position part of a block.','c51'],
qkv:['查询、键、值','query, key, value (Q, K, V)','由同一输入分别乘 W_Q、W_K、W_V 得到的三个激活值；角色名称，不是字面含义。','Three activations from the same input times W_Q, W_K, W_V; role names, not literal meanings.','c52'],
scores:['注意力分数','attention scores','Q Kᵀ / √d_k，形状 [n, n]；softmax 前的数值。','Q Kᵀ / √d_k, shape [n, n]; values before softmax.','c53'],
mask:['因果掩码','causal mask','把 j > i 的分数设为 −∞，使每个位置只能看见自己和之前的位置。','Sets scores with j > i to −∞ so each position sees only itself and earlier positions.','c53'],
attweights:['注意力权重','attention weights','对分数逐行 softmax 的结果，每行和为 1；是混合比例，不是解释。','Row-wise softmax of the scores, each row summing to 1; mixing proportions, not explanations.','c53'],
head:['注意力头','attention head','一组独立的 W_Q、W_K、W_V 及其 softmax；多个头并行后拼接，经 W_O 混合。','One independent set of W_Q, W_K, W_V with its own softmax; heads run in parallel, are concatenated, and mixed by W_O.','c55'],
wo:['输出投影','output projection (W_O)','[d_model, d_model] 参数，把拼接后的各头输出混合并映射回残差流。','A [d_model, d_model] parameter mixing the concatenated head outputs back into the residual stream.','c55'],
block:['Transformer 块','Transformer block','x ← x + Attn(Norm(x))；x ← x + MLP(Norm(x))。模型由 L 个结构相同、参数不同的块组成。','x ← x + Attn(Norm(x)); x ← x + MLP(Norm(x)). A model stacks L structurally identical blocks with different parameters.','c56'],
swiglu:['SwiGLU','SwiGLU','门控 MLP：(SiLU(xW₁) ⊙ xW₃) W₂，Llama 等使用。','Gated MLP: (SiLU(xW₁) ⊙ xW₃) W₂, used by Llama and others.','c56'],
gqa:['分组查询注意力','grouped-query attention (GQA)','多个查询头共享一组 K/V 头，以缩小 KV 缓存。','Several query heads share one K/V head, shrinking the KV cache.','c55']
});


Object.assign(Q,{
c61q1:{k:'calc',q:['一个训练片段有 4096 个 token。它提供多少个“预测下一个 token”的训练样本？','A training chunk has 4096 tokens. How many next-token prediction examples does it provide?'],c:[
 ['1 个','1','每个位置都有自己的目标。','Every position has its own target.',0],
 ['4095 个（最后一个 token 没有下一个可预测）','4095 (the last token has no next token to predict)','正确。输入是前 4095 个，目标是后 4095 个；它们在一次前向计算中同时得到预测（6.5）。','Correct. Inputs are the first 4095, targets the last 4095; all are predicted in one forward pass (6.5).',1],
 ['4096²','4096²','样本数与 n 成正比，不是 n²。','The count is proportional to n, not n².',0],
 ['取决于人工标注的数量','Depends on how many labels humans provide','目标直接来自文本本身，不需要人工标注。','Targets come straight from the text; no human labels are needed.',0]]},
c62q1:{k:'pred',q:['在实验 6.2 中把目标 token 的 logit 提高 2，其他不变。损失会怎样？','In Lab 6.2, raise the target token\'s logit by 2 and leave the rest. What happens to the loss?'],c:[
 ['下降','It falls','正确。目标的 softmax 概率上升，−log p 下降。注意：把<b>所有</b> logits 都加 2 则损失不变（平移不变性）。','Correct. The target\'s softmax probability rises, so −log p falls. Note: adding 2 to <b>all</b> logits would leave the loss unchanged (shift invariance).',1],
 ['上升','It rises','提高目标 logit 会提高它的概率。','Raising the target logit raises its probability.',0],
 ['不变','Unchanged','只改一个 logit 会改变相对差距。','Changing one logit changes the relative gaps.',0],
 ['变为 0','Becomes 0','只有 p = 1 时损失才为 0，而 softmax 永远小于 1。','The loss is 0 only at p = 1, which softmax never reaches exactly.',0]]},
c63q1:{k:'pred',q:['模型对目标 token 的概率已经是 0.99。这个样本对输出层权重的梯度大约如何？','The model already assigns 0.99 to the target token. Roughly how large is this example\'s gradient on the output weights?'],c:[
 ['很小，因为 p − y 接近 0','Small, because p − y is near 0','正确。目标项为 0.99 − 1 = −0.01，其他项合计只有 0.01。已经预测好的样本几乎不推动参数。','Correct. The target entry is 0.99 − 1 = −0.01, and the others total only 0.01. Well-predicted examples barely move the parameters.',1],
 ['很大，因为概率很高','Large, because the probability is high','梯度大小取决于“错得多严重”，不是概率高低本身。','Gradient size reflects how wrong the prediction is, not probability height.',0],
 ['等于 0.99','Equal to 0.99','目标 logit 的梯度是 p − 1。','The target logit\'s gradient is p − 1.',0],
 ['无法计算','Cannot be computed','公式 p − y 适用于任何情况。','The formula p − y always applies.',0]]},
c63q2:{k:'err',q:['找错：“反向传播会把训练数据存进模型的权重里，就像把文件复制进数据库。”','Spot the error: “Backpropagation stores the training data in the weights, like copying files into a database.”'],c:[
 ['没有错','No error','梯度更新是对大量参数的微小调整，不是存储副本。','Gradient updates are small adjustments to many parameters, not stored copies.',0],
 ['错：反向传播只计算每个参数的梯度；优化器据此把参数挪一小步。数据的影响以统计方式分散在许多参数中','Wrong: backpropagation only computes each parameter\'s gradient; the optimizer moves parameters a small step. Data influences parameters statistically, spread across many of them','正确。不过模型确实可能记住一些重复出现的具体文本片段（“记忆化”），这是需要另外评估的现象，不是“存数据库”的机制。','Correct. Models can still memorize some frequently repeated text verbatim (“memorization”), a phenomenon that needs separate evaluation, but it is not a database-style mechanism.',1],
 ['错：反向传播只在推理时运行','Wrong: backpropagation runs only during inference','推理时不运行反向传播。','Backpropagation does not run during inference.',0],
 ['错：反向传播会改变架构','Wrong: backpropagation changes the architecture','架构不变，只有参数值改变。','The architecture stays fixed; only parameter values change.',0]]},
c64q1:{k:'pred',q:['SFT 时通常只对“回答”部分的 token 计算损失。如果连“用户提问”部分也算损失，会有什么倾向？','In SFT, loss is usually computed only on response tokens. If the user-prompt tokens were included too, what would tend to happen?'],c:[
 ['模型也会被训练去预测用户会写什么，而不只是如何回答','The model would also be trained to predict what users write, not just how to answer','正确。这不一定有害，但偏离了“学习如何回答”的目标，所以常见做法是把提示部分的损失屏蔽掉。','Correct. Not necessarily harmful, but it drifts from the goal of learning to answer, so prompt tokens are commonly masked out of the loss.',1],
 ['模型无法训练','The model could not be trained','技术上完全可行。','It is technically entirely possible.',0],
 ['参数不再改变','Parameters would stop changing','损失项更多，参数仍会更新。','With more loss terms, parameters still update.',0],
 ['等同于预训练','It would equal pretraining','数据仍是对话格式的指令数据，不同于预训练语料。','The data is still chat-formatted instruction data, unlike pretraining corpora.',0]]},
c65q1:{k:'calc',q:['用 KV 缓存生成：提示 500 个 token，生成 100 个 token。大约需要多少次模型前向计算？训练一段 600 token 的文本呢？','Generating with a KV cache: a 500-token prompt, 100 generated tokens. Roughly how many forward passes? And for training on one 600-token text?'],c:[
 ['生成约 100 次（1 次处理整个提示并给出第 1 个 token，之后每个新 token 1 次）；训练 1 次前向（加 1 次反向）','Generation about 100 (one for the whole prompt yielding the first token, then one per new token); training 1 forward (plus 1 backward)','正确。第一次叫预填充，之后叫解码（7.4）。','Correct. The first is called prefill, the rest decode (7.4).',1],
 ['生成 600 次；训练 600 次','Generation 600; training 600','训练一次就处理全部位置；提示也是一次处理完的。','Training processes all positions at once; so is the prompt.',0],
 ['生成 1 次；训练 1 次','Generation 1; training 1','生成的 token 必须一个接一个产生。','Generated tokens must be produced one after another.',0],
 ['生成 500 次；训练 100 次','Generation 500; training 100','颠倒且不正确。','Swapped and wrong.',0]]},
c66q1:{k:'pred',q:['设 top-k = 1。温度从 0.2 调到 2.0，输出会怎样？','Set top-k = 1. Temperature goes from 0.2 to 2.0. What happens to the output?'],c:[
 ['完全不变：只剩一个候选，总是选它','Unchanged: only one candidate remains, always chosen','正确。top-k = 1 就是贪心解码。温度不会改变哪个 logit 最大。','Correct. Top-k = 1 is greedy decoding, and temperature never changes which logit is largest.',1],
 ['变得更随机','More random','只剩一个候选时没有随机性。','With one candidate there is no randomness.',0],
 ['变得更确定','More deterministic','已经是完全确定的。','It is already fully deterministic.',0],
 ['报错','An error','这是合法设置。','This is a valid setting.',0]]},
c66q2:{k:'err',q:['找错：“把温度调到 0 可以让模型更准确，因为它会用更多的知识。”','Spot the error: “Setting temperature to 0 makes the model more accurate because it uses more knowledge.”'],c:[
 ['没有错','No error','温度不改变模型的计算，只改变选择方式。','Temperature does not change the model\'s computation, only how a token is chosen.',0],
 ['错：温度 0 只是总选概率最高的 token（贪心）；logits 本身完全一样。它让输出更稳定，但不保证更正确','Wrong: temperature 0 just always picks the most likely token (greedy); the logits are identical. It makes output more stable, not guaranteed more correct','正确。在某些任务上贪心更好，在另一些任务上（如需要多样性）更差。','Correct. Greedy is better for some tasks and worse for others (e.g. where diversity matters).',1],
 ['错：温度 0 会让模型停止生成','Wrong: temperature 0 stops generation','它只是变成贪心选择。','It just becomes greedy selection.',0],
 ['错：温度只影响速度','Wrong: temperature only affects speed','温度几乎不影响速度。','Temperature has almost no effect on speed.',0]]}
});
Object.assign(E,{
c67e1:{k:'expl',q:['用户问：“我昨天跟你说过我叫小林，你今天为什么不记得？是不是你的权重被重置了？”用本部分的概念解释实际发生了什么。','A user asks: “I told you yesterday my name is Lin. Why don\'t you remember today? Were your weights reset?” Explain what actually happened, using this part\'s concepts.'],
 a:['权重从来没有因为对话而改变，所以也谈不上“被重置”。昨天模型能用你的名字，是因为“我叫小林”作为 token 留在那次对话的上下文中，每生成一个 token 都会被重新处理（或从 KV 缓存中读取）。对话结束后，那段上下文就被丢弃了；今天的新对话上下文中没有这些 token，模型自然无法得知。如果产品提供“记忆”功能，通常是把这类信息以文字形式保存起来，在新对话开始时再放进上下文，而不是修改模型参数。要真正改变参数，需要另外运行训练（如微调），这不是普通对话会做的事。','The weights never changed because of the conversation, so there was nothing to reset. Yesterday the model could use your name because “my name is Lin” stayed in that conversation\'s context as tokens, processed again (or read from the KV cache) for each generated token. When the conversation ended, that context was discarded; today\'s new conversation does not contain those tokens, so the model has no way to know. If a product offers a “memory” feature, it usually stores such information as text and inserts it into the context of new conversations; it does not modify model parameters. Changing parameters requires a separate training run (such as fine-tuning), which ordinary conversations do not do.']}
});
Object.assign(G,{
logits:['logits','logits','最终隐藏状态乘以输出矩阵 W_U 得到的长度为 V 的分数向量，softmax 前的值。','The length-V score vector from the final hidden state times the output matrix W_U, before softmax.','c62'],
unembed:['反嵌入 / 输出矩阵','unembedding / output matrix','形状 [d, V] 的参数，把隐藏状态映射到词表 logits。','A [d, V] parameter mapping hidden states to vocabulary logits.','c62'],
ce:['交叉熵损失','cross-entropy loss','−log p_t：目标 token 概率越低，损失越大；批次中各位置取平均。','−log p_t: the lower the target\'s probability, the larger the loss; averaged over positions in a batch.','c62'],
gradient:['梯度','gradient','损失对每个参数的敏感度；参数沿其反方向更新。','The loss\'s sensitivity to each parameter; parameters move against it.','c63'],
backprop:['反向传播','backpropagation','用链式法则从损失出发逐层向回计算所有梯度的方法，约为一次前向计算的两倍开销。','Computing all gradients by applying the chain rule backwards from the loss, costing about twice a forward pass.','c63'],
lr:['学习率','learning rate','每次更新的步长 η。','The step size η of each update.','c63'],
optimizer:['优化器','optimizer','根据梯度更新参数的规则，如 SGD、AdamW。','The rule that updates parameters from gradients, such as SGD or AdamW.','c63'],
pretrain:['预训练','pretraining','在海量文本上做下一个 token 预测，得到基础模型。','Next-token prediction on vast text, producing a base model.','c64'],
sft:['监督微调','supervised fine-tuning (SFT)','用指令—回答对继续训练，通常只对回答计算损失。','Further training on instruction–response pairs, usually with loss on the response only.','c64'],
pref:['偏好优化','preference optimization','用“哪个回答更好”的数据调整模型，如 RLHF、DPO。','Adjusting the model with “which response is better” data, e.g. RLHF, DPO.','c64'],
teacher:['教师强制','teacher forcing','训练时每个位置的输入都是真实文本，从而所有位置可在一次前向中并行预测。','In training every position\'s input is the real text, so all positions are predicted in parallel in one pass.','c65'],
greedy:['贪心解码','greedy decoding','总是选概率最高的 token；等同于 T → 0 或 top-k = 1。','Always choosing the most likely token; equivalent to T → 0 or top-k = 1.','c66'],
topk:['top-k','top-k','只保留概率最高的 k 个 token 再归一化。','Keep the k most likely tokens, then renormalize.','c66'],
topp:['top-p（核采样）','top-p (nucleus sampling)','保留累计概率首次达到 p 的最小集合再归一化。','Keep the smallest set whose cumulative probability reaches p, then renormalize.','c66'],
eos:['结束 token','end-of-sequence token (EOS)','表示生成结束的特殊 token；采到它即停止。','A special token marking the end; generation stops when it is sampled.','c67'],
icl:['上下文学习','in-context learning','仅凭提示中的示例或说明改变行为，发生在激活值层面，不改权重。','Changing behaviour from examples or instructions in the prompt; happens in activations, not weights.','c67']
});


Object.assign(Q,{
c71q1:{k:'pred',q:['单个请求、批量为 1 的解码。把同一个模型换到一张算力翻倍、但显存带宽不变的 GPU 上，生成速度大约会怎样？','Batch-1 decode for one request. Moving the same model to a GPU with twice the compute but the same memory bandwidth, roughly what happens to generation speed?'],c:[
 ['几乎不变，因为瓶颈是读取权重的带宽','Almost unchanged, because the bottleneck is bandwidth for reading weights','正确。批量为 1 时计算单元大部分时间在等数据。带宽翻倍才会接近翻倍提速。','Correct. At batch 1 the compute units mostly wait for data. Doubling bandwidth would come close to doubling speed.',1],
 ['大约翻倍','About doubles','只有计算受限时才会这样。','Only if it were compute-bound.',0],
 ['变慢','Slower','不会因为算力提高而变慢。','More compute does not make it slower.',0],
 ['取决于温度设置','Depends on temperature','采样设置几乎不影响速度。','Sampling settings barely affect speed.',0]]},
c72q1:{k:'calc',q:['一个 70B 稠密模型，用约 4.5 位/参数的 4 位量化存储。仅权重约需多少显存？','A 70B dense model stored with 4-bit quantization at about 4.5 bits per parameter. Roughly how much memory do the weights alone need?'],c:[
 ['约 39 GB（约 37 GiB）','About 39 GB (about 37 GiB)','正确。70×10⁹ × 4.5 / 8 ≈ 39.4×10⁹ 字节。一张 48 GB 的卡可以放下权重，但还要给 KV 缓存和开销留空间。','Correct. 70×10⁹ × 4.5 / 8 ≈ 39.4×10⁹ bytes. A 48 GB card can hold the weights, but KV cache and overhead also need room.',1],
 ['约 140 GB','About 140 GB','这是 BF16（2 字节）的大小。','That is BF16 (2 bytes).',0],
 ['约 70 GB','About 70 GB','这是 8 位的大小。','That is 8-bit.',0],
 ['约 4.5 GB','About 4.5 GB','少乘了一个 10⁹ 的量级关系；70B × 0.56 字节 ≈ 39 GB。','Off by the scale; 70B × 0.56 bytes ≈ 39 GB.',0]]},
c73q1:{k:'err',q:['找错：“KV 缓存把过去每个位置的 Q、K、V 都存了下来，这样就不用重新计算。”','Spot the error: “The KV cache stores every past position\'s Q, K and V so nothing has to be recomputed.”'],c:[
 ['没有错','No error','Q 不需要缓存。','Q does not need caching.',0],
 ['错：只存 K 和 V。新 token 的注意力只用到它自己的 q，以及所有位置的 k 和 v；过去位置的 q 不再被使用','Wrong: only K and V are stored. A new token\'s attention uses its own q and every position\'s k and v; past positions\' q are never used again','正确。这也是名字叫“KV 缓存”而不是“QKV 缓存”的原因。','Correct. That is why it is called a KV cache, not a QKV cache.',1],
 ['错：它只存最后一层','Wrong: it stores only the last layer','每一层都有自己的 K、V 缓存。','Every layer has its own K and V cache.',0],
 ['错：它存的是权重','Wrong: it stores weights','KV 缓存是运行时激活值，不是参数。','The KV cache holds runtime activations, not parameters.',0]]},
c73q2:{k:'calc',q:['Llama 3.1 70B：80 层、8 个 KV 头、头维度 128，KV 用 BF16。一个 32K（32768）token 的序列需要多少 KV 缓存？','Llama 3.1 70B: 80 layers, 8 KV heads, head dim 128, KV in BF16. How much KV cache does one 32K (32768-token) sequence need?'],c:[
 ['10 GiB','10 GiB','正确。每 token 2 × 80 × 8 × 128 × 2 = 327,680 字节 = 320 KiB；× 32768 = 10 GiB。','Correct. Per token 2 × 80 × 8 × 128 × 2 = 327,680 bytes = 320 KiB; × 32768 = 10 GiB.',1],
 ['80 GiB','80 GiB','如果没有 GQA（64 个 KV 头）才会是 8 倍。','Only without GQA (64 KV heads) would it be 8× larger.',0],
 ['1.25 GiB','1.25 GiB','少乘了 8 个 KV 头。','The 8 KV heads were left out.',0],
 ['与序列长度无关','Independent of sequence length','KV 缓存随 token 数线性增长。','The KV cache grows linearly with tokens.',0]]},
c74q1:{k:'pred',q:['提示从 200 token 增加到 8000 token，输出长度不变。哪个指标受影响最明显？','The prompt grows from 200 to 8000 tokens; output length unchanged. Which metric is most affected?'],c:[
 ['首 token 延迟（TTFT），因为预填充要处理 40 倍的位置','Time to first token (TTFT), because prefill processes 40× the positions','正确。逐 token 延迟也会因 KV 缓存更大而略有上升（每步要读更多 KV），但 TTFT 的变化最直接。','Correct. Per-token latency also rises a little because each step reads a larger KV cache, but TTFT changes most directly.',1],
 ['只影响逐 token 延迟','Only per-token latency','预填充时间直接随提示长度增长。','Prefill time grows directly with prompt length.',0],
 ['不影响任何指标','No metric is affected','处理更多 token 需要更多时间和显存。','More tokens take more time and memory.',0],
 ['只影响模型文件大小','Only the model file size','文件大小与提示无关。','File size has nothing to do with the prompt.',0]]},
c74q2:{k:'pred',q:['在实验 7.4 中勾选“不使用 KV 缓存”。生成越往后，每步处理的位置数会怎样？','In Lab 7.4, tick “No KV cache”. As generation proceeds, how many positions does each step process?'],c:[
 ['越来越多：每步都要重新处理整个上下文','More and more: each step reprocesses the whole context','正确。总计算量随长度平方增长。有缓存时每步只处理 1 个新位置。','Correct. Total compute grows quadratically with length. With the cache each step processes only 1 new position.',1],
 ['始终为 1','Always 1','那是有缓存时的情况。','That is the cached case.',0],
 ['越来越少','Fewer and fewer','上下文只会变长。','The context only gets longer.',0],
 ['固定为提示长度','Fixed at the prompt length','生成的 token 也要被处理。','Generated tokens must be processed too.',0]]},
c75q1:{k:'pred',q:['一个服务的显存刚好被占满。把每个请求允许的最大上下文从 8K 提高到 32K（其他不变），最直接的后果是？','A server\'s memory is exactly full. Raising the allowed context per request from 8K to 32K (nothing else changed), the most direct consequence is…'],c:[
 ['能同时服务的满长度请求数大约降为 1/4','The number of full-length requests served at once drops to roughly 1/4','正确。每个满长度请求的 KV 缓存变为 4 倍，而留给 KV 的显存总量不变。','Correct. Each full-length request\'s KV cache is 4× larger while total KV memory stays the same.',1],
 ['权重变为 4 倍','Weights become 4× larger','权重与上下文长度无关。','Weights do not depend on context length.',0],
 ['没有影响','No effect','KV 缓存随上下文线性增长。','The KV cache grows linearly with context.',0],
 ['模型精度下降','Model accuracy drops','这是容量问题，不是精度问题。','This is a capacity issue, not accuracy.',0]]},
c76q1:{k:'err',q:['找错：“我下载了权重文件，所以已经有运行模型所需的一切了。”','Spot the error: “I downloaded the weights (safetensors), so I have everything needed to run the model.”'],c:[
 ['没有错','No error','还缺配置、分词器、对话模板和推理引擎。','Config, tokenizer, chat template and an inference engine are missing.',0],
 ['错：还需要配置文件、分词器文件、对话模板，以及一个推理引擎（若要通过 HTTP 访问，还需要 API 服务）','Wrong: you also need the config, tokenizer files, chat template and an inference engine (plus an API server for HTTP access)','正确。GGUF 格式把前三者打包进一个文件，但仍需要 llama.cpp 之类的引擎。','Correct. GGUF bundles the first three into one file, but you still need an engine such as llama.cpp.',1],
 ['错：还需要训练数据','Wrong: you also need the training data','推理不需要训练数据。','Inference does not need training data.',0],
 ['错：还需要重新训练一次','Wrong: it must be retrained first','发布的权重可以直接使用。','Released weights can be used directly.',0]]},
c77q1:{k:'pred',q:['一个 70B 模型（BF16 约 140 GB）放不进一张 80 GB 的卡。只增加数据并行的副本数，能解决吗？','A 70B model (about 140 GB in BF16) does not fit on one 80 GB GPU. Would adding data-parallel replicas solve it?'],c:[
 ['不能：数据并行的每个副本都需要完整模型；需要张量并行或流水线并行（或量化）','No: every data-parallel replica needs the full model; tensor or pipeline parallelism (or quantization) is needed','正确。例如张量并行 2 卡，每卡约 70 GB 权重，仍需给 KV 缓存留空间，所以实际常用 4 卡或更多。','Correct. With 2-way tensor parallelism each GPU holds about 70 GB of weights and still needs KV room, so 4 or more GPUs are common in practice.',1],
 ['能','Yes','数据并行不拆分模型。','Data parallelism does not split the model.',0],
 ['能，只要副本足够多','Yes, with enough replicas','副本越多，每张卡仍需放下完整模型。','However many replicas, each GPU still needs the full model.',0],
 ['只需要更多系统内存','It just needs more system RAM','放在系统内存中可以运行，但速度会慢很多（7.1）。','It can run from system RAM, but far more slowly (7.1).',0]]}
});
Object.assign(G,{
gpu:['GPU','GPU','有大量并行运算单元和矩阵乘法单元的处理器，适合模型的矩阵运算。','A processor with massive parallel units and matrix-multiply hardware, suited to model computation.','c71'],
vram:['显存','GPU memory (VRAM / HBM)','GPU 旁的高带宽存储，存放权重、KV 缓存与激活值。','High-bandwidth memory next to the GPU holding weights, KV cache and activations.','c71'],
bandwidth:['显存带宽','memory bandwidth','每秒能从显存读取的字节数；决定解码速度上限。','Bytes per second readable from GPU memory; caps decode speed.','c71'],
membound:['访存受限','memory-bound','速度受读取数据快慢限制而非计算快慢；批量为 1 的解码即如此。','Speed limited by data reading rather than computing, as in batch-1 decode.','c71'],
precision:['数值精度','numerical precision','每个数使用的位数与格式，如 FP32、BF16、FP8、INT4。','The bits and format per number, e.g. FP32, BF16, FP8, INT4.','c72'],
quant:['量化','quantization','用更少位数存储权重（或 KV），配合缩放因子近似还原。','Storing weights (or KV) in fewer bits, with scale factors to approximate the originals.','c72'],
kvcache:['KV 缓存','KV cache','生成时保存的每层每个位置的 K、V；运行时数据，随上下文和并发线性增长。','Per-layer, per-position K and V kept during generation; runtime data growing linearly with context and concurrency.','c73'],
prefill:['预填充','prefill','一次并行处理整个提示、填满 KV 缓存并给出第一个 token 的阶段；通常计算受限。','Processing the whole prompt in parallel, filling the KV cache and producing the first token; usually compute-bound.','c74'],
decode:['解码','decode','每步为每个请求生成一个 token 的阶段；通常访存受限。','The phase generating one token per request per step; usually memory-bound.','c74'],
ttft:['首 token 延迟','time to first token (TTFT)','从请求到达到第一个 token 返回的时间。','Time from request arrival to the first token returned.','c74'],
tpot:['逐 token 延迟','time per output token (TPOT)','之后每个输出 token 之间的平均间隔。','Average gap between subsequent output tokens.','c74'],
throughput:['吞吐量','throughput','系统每秒生成的 token 总数。','Total tokens generated per second by the system.','c74'],
batching:['批处理','batching','把多个请求的计算合并执行，以便一次读取权重服务多个请求。','Running several requests together so one weight read serves them all.','c75'],
engine:['推理引擎','inference engine','加载权重并高效执行前向计算、KV 管理、批处理与采样的软件。','Software that loads weights and efficiently runs forward passes, KV management, batching and sampling.','c76'],
tp:['张量并行','tensor parallelism','把每个权重矩阵切分到多张 GPU 上并行计算。','Splitting each weight matrix across GPUs.','c77'],
pp:['流水线并行','pipeline parallelism','按层把模型分到多张 GPU 上，激活值依次传递。','Splitting the model by layers across GPUs, passing activations along.','c77'],
dp:['数据并行','data parallelism','每张 GPU 一份完整模型，处理不同请求或数据。','A full model copy per GPU, each handling different requests or data.','c77']
});


Object.assign(Q,{
c82q1:{k:'calc',q:['根据配置，每个头的维度和每个 token 的 KV 缓存（BF16）分别是？','From the config, what are the per-head dimension and the KV cache per token (BF16)?'],c:[
 ['128；128 KiB','128; 128 KiB','正确。4096 / 32 = 128；2 × 32 层 × 8 KV 头 × 128 × 2 字节 = 131,072 字节。','Correct. 4096 / 32 = 128; 2 × 32 layers × 8 KV heads × 128 × 2 bytes = 131,072 bytes.',1],
 ['128；512 KiB','128; 512 KiB','这是把 KV 头当成 32 个的结果；配置中 num_key_value_heads = 8（GQA）。','That treats KV heads as 32; the config says num_key_value_heads = 8 (GQA).',0],
 ['512；128 KiB','512; 128 KiB','d_head = hidden_size / num_attention_heads = 128。','d_head = hidden_size / num_attention_heads = 128.',0],
 ['32；4 KiB','32; 4 KiB','数值混淆了头数与头维度。','Head count and head dimension are confused.',0]]},
c82q2:{k:'calc',q:['每个块中，MLP 与注意力的参数量之比约为多少？','In each block, roughly what is the ratio of MLP to attention parameters?'],c:[
 ['约 4.2 : 1','About 4.2 : 1','正确。MLP：3 × 4096 × 14336 ≈ 1.76 亿；注意力：Q、O 各 4096² ≈ 1678 万，K、V 各 4096 × 1024 ≈ 419 万，合计约 4194 万。','Correct. MLP: 3 × 4096 × 14336 ≈ 176M; attention: Q and O 4096² ≈ 16.8M each, K and V 4096 × 1024 ≈ 4.2M each, about 41.9M total.',1],
 ['约 1 : 1','About 1 : 1','MLP 的中间维度 14336 远大于注意力投影的维度。','The MLP\'s intermediate size 14336 is much larger than attention\'s projections.',0],
 ['约 1 : 4','About 1 : 4','颠倒了。','Reversed.',0],
 ['无法从配置得知','Cannot be determined from the config','配置给出了所需的全部形状。','The config gives every shape needed.',0]]},
c82q3:{k:'calc',q:['按 --max-model-len 16384，一个用满长度的请求需要多少 KV 缓存？','With --max-model-len 16384, how much KV cache does one full-length request need?'],c:[
 ['2 GiB','2 GiB','正确。128 KiB × 16384 = 2 GiB。','Correct. 128 KiB × 16384 = 2 GiB.',1],
 ['16 GiB','16 GiB','这是 131072 token 时的大小。','That is the size at 131072 tokens.',0],
 ['128 KiB','128 KiB','这是每个 token 的大小。','That is per token.',0],
 ['15 GiB','15 GiB','这接近权重的大小，不是 KV。','That is close to the weights, not the KV cache.',0]]},
c82q4:{k:'pred',q:['假设 GPU 实际有 80 GiB，--gpu-memory-utilization 0.90 让 vLLM 使用约 72 GiB；权重约 15 GiB，再假设激活工作区等开销约 4 GiB。大约能同时容纳多少个<b>满长度</b>（16384 token）请求的 KV？与 --max-num-seqs 32 的关系是？','Assume the GPU really has 80 GiB; --gpu-memory-utilization 0.90 lets vLLM use about 72 GiB; weights are about 15 GiB; assume about 4 GiB for activation workspace and other overhead. Roughly how many <b>full-length</b> (16384-token) requests\' KV can fit at once? How does that relate to --max-num-seqs 32?'],c:[
 ['约 26 个；若 32 个请求都用满长度，放不下全部，调度器会让部分请求等待或被抢占；实际请求通常更短，所以 32 个并发常常可行','About 26; if all 32 used full length they would not all fit, so the scheduler makes some wait or preempts them; real requests are usually shorter, so 32 concurrent is often fine','正确。(72 − 15 − 4) ≈ 53 GiB ÷ 2 GiB ≈ 26。分页 KV（D7）按实际长度分配，这正是它的价值。数字为近似估算，实际以引擎启动日志中报告的 KV 容量为准。','Correct. (72 − 15 − 4) ≈ 53 GiB ÷ 2 GiB ≈ 26. Paged KV (D7) allocates by actual length, which is exactly its value. These are approximations; the engine\'s startup log reports the real KV capacity.',1],
 ['32 个，因为 max-num-seqs 保证了这一点','32, because max-num-seqs guarantees it','max-num-seqs 只是上限，不保证显存足够。','max-num-seqs is a cap, not a memory guarantee.',0],
 ['约 4 个','About 4','这是把每个请求按 131072 token 计算的结果。','That assumes 131072 tokens per request.',0],
 ['无限多，因为 KV 缓存在系统内存中','Unlimited, because the KV cache lives in system RAM','KV 缓存在 GPU 显存中。','The KV cache lives in GPU memory.',0]]},
c82q5:{k:'err',q:['找错：“配置里 max_position_embeddings 是 131072，所以这个服务能接受 13 万 token 的提示。”','Spot the error: “The config says max_position_embeddings is 131072, so this server accepts 130K-token prompts.”'],c:[
 ['没有错','No error','部署参数限制了实际可用长度。','The deployment flags limit the usable length.',0],
 ['错：--max-model-len 16384 把这个服务的最大上下文（提示 + 输出）限制为 16384 token；更长的请求会被拒绝','Wrong: --max-model-len 16384 caps this server\'s context (prompt + output) at 16384 tokens; longer requests are rejected','正确。模型支持的长度和某次部署允许的长度是两回事；后者通常受显存预算限制（见本章最后一个练习）。','Correct. The length a model supports and the length a deployment allows are different; the latter is usually limited by the memory budget (see the last exercise in this chapter).',1],
 ['错：模型根本无法超过 8192','Wrong: the model cannot exceed 8192 at all','Llama 3.1 通过 RoPE 缩放支持 131072；问题在部署参数。','Llama 3.1 supports 131072 via RoPE scaling; the issue is the deployment flag.',0],
 ['错：上下文长度由温度决定','Wrong: context length depends on temperature','温度与长度无关。','Temperature has nothing to do with length.',0]]}
});
Object.assign(E,{
c81e1:{k:'expl',q:['不看实验，按顺序写出一个请求的各个阶段。对每个阶段写一句话：在 CPU 还是 GPU 上、读取了哪些参数（如有）、产生或修改了哪些运行时数据。','Without looking at the lab, list a request\'s stages in order. For each, write one sentence: CPU or GPU, which parameters are read (if any), what runtime data is produced or changed.'],
 a:['(1) API 服务接收请求（CPU）：JSON 中的消息与采样参数，无模型参数。(2) 调度（CPU）：等待批次位置与 KV 空间。(3) 套用对话模板并分词（CPU）：得到 token ID 列表。(4) 嵌入查表（GPU）：读取嵌入表的对应行，得到 [n, d] 激活值。(5) 预填充（GPU）：读取全部块的权重，逐层计算所有提示位置，写入每层的 KV 缓存；激活值用完即弃。(6) logits 与采样（GPU）：读取最终归一化与输出矩阵，得到 [V] logits，按采样设置选出第一个 token；此时首 token 延迟结束。(7) 反分词并流式发送（CPU）：token ID 变成文字片段，通过 SSE 发回。(8) 解码循环（GPU）：对新 token 做一次前向计算，读全部权重和 KV 缓存，追加新的 K/V，采样下一个 token，重复。(9) 结束（CPU/GPU）：遇到停止条件，释放 KV 缓存，返回用量统计。全程参数只读，始终驻留在显存中。','(1) API server receives the request (CPU): messages and sampling settings in JSON; no model parameters. (2) Scheduling (CPU): wait for a batch slot and KV space. (3) Apply the chat template and tokenize (CPU): a list of token IDs. (4) Embedding lookup (GPU): read the matching rows of the embedding table, giving [n, d] activations. (5) Prefill (GPU): read every block\'s weights, compute all prompt positions layer by layer, write each layer\'s KV cache; activations are discarded after use. (6) Logits and sampling (GPU): read the final norm and output matrix to get [V] logits; choose the first token per the sampling settings; time to first token ends here. (7) Detokenize and stream (CPU): token ID becomes a text piece sent via SSE. (8) Decode loop (GPU): one forward pass for the new token, reading all weights and the KV cache, appending new K/V, sampling the next token, repeat. (9) Finish (CPU/GPU): a stop condition is hit, the KV cache is freed, usage is reported. Throughout, parameters are read-only and stay resident in GPU memory.']},
c82e1:{k:'expl',q:['只用这份 config.json，描述一个 token 在这个模型中的完整路径：每一步的形状、使用了哪些参数、哪些设计选择与 GPT-2 不同。','Using only this config.json, describe one token\'s full path through this model: shapes at each step, which parameters are used, and which design choices differ from GPT-2.'],
 a:['token ID（0…128255）→ 嵌入表 [128256, 4096] 取一行 → [4096]（无位置嵌入表，位置由 RoPE 提供，rope_theta = 500000）。然后经过 32 个相同结构的块，每块：RMSNorm（γ [4096]，eps 1e-5）→ Q 投影 [4096, 4096] 得 32 个头 × 128；K、V 投影各 [4096, 1024] 得 8 个 KV 头 × 128（GQA，每 4 个查询头共享一组 K/V）→ 对 Q、K 施加 RoPE → 因果注意力 → 拼接 [4096] → W_O [4096, 4096] → 加回残差 → RMSNorm → SwiGLU MLP：两个 [4096, 14336] 投影（门控一路经过 SiLU）逐元素相乘，再 [14336, 4096] 投影回来 → 加回残差。最后 RMSNorm → 独立的输出矩阵 [4096, 128256]（tie_word_embeddings = false）→ logits [128256]。权重以 BF16 发布，约 8.03B 参数、约 15 GiB。与 GPT-2 不同：RMSNorm 而非 LayerNorm、RoPE 而非位置表、SwiGLU 而非 GELU MLP、GQA、无偏置、输出层不共享、词表更大、上下文长得多。','Token ID (0…128255) → one row of the embedding table [128256, 4096] → [4096] (no position table; position comes from RoPE, rope_theta = 500000). Then 32 structurally identical blocks, each: RMSNorm (γ [4096], eps 1e-5) → Q projection [4096, 4096] into 32 heads × 128; K and V projections [4096, 1024] each into 8 KV heads × 128 (GQA: every 4 query heads share one K/V) → RoPE on Q and K → causal attention → concatenate [4096] → W_O [4096, 4096] → add to residual → RMSNorm → SwiGLU MLP: two [4096, 14336] projections (gate through SiLU) multiplied element-wise, then [14336, 4096] back → add to residual. Finally RMSNorm → a separate output matrix [4096, 128256] (tie_word_embeddings = false) → logits [128256]. Weights are released in BF16: about 8.03B parameters, about 15 GiB. Differences from GPT-2: RMSNorm instead of LayerNorm, RoPE instead of a position table, SwiGLU instead of a GELU MLP, GQA, no biases, untied output layer, larger vocabulary, much longer context.']},
c82e2:{k:'expl',q:['用户发送一份约 15,000 token 的文档并提问。他们抱怨“要等好几秒才开始出字，之后出字很快”。用本课程的概念解释原因，并提出至少两种改善办法。','A user sends a document of about 15,000 tokens with a question and complains: “it takes several seconds before any text appears, then it streams quickly.” Explain why using the course\'s concepts, and suggest at least two mitigations.'],
 a:['开始出字前的时间是首 token 延迟，主要由排队和预填充决定。预填充要一次处理全部 15,000 个位置：每层的矩阵乘法量与 n 成正比，注意力部分还与 n² 成正比，并且要写入 15,000 个位置的 KV 缓存，所以要几秒。之后的每个 token 是解码：只处理一个新位置，主要受读权重和 KV 缓存的带宽限制，与提示长度关系较弱，所以很快。改善办法：(1) 若同一文档会被反复提问，开启前缀缓存（如 vLLM 的自动前缀缓存），复用已计算的 KV，后续请求几乎不需重新预填充；(2) 只把相关段落放进提示（检索），减少 n；(3) 使用更多 GPU 做张量并行或更快的硬件以缩短预填充；(4) 开启分块预填充，避免一个长提示阻塞其他请求的解码（改善的是整体体验而不是这个请求自身的 TTFT）。','The wait before text appears is the time to first token, set mainly by queueing and prefill. Prefill must process all 15,000 positions at once: per-layer matrix multiplication grows with n, attention grows with n², and KV entries for 15,000 positions are written, so it takes seconds. Each later token is decode: it processes one new position and is limited mainly by the bandwidth for reading weights and the KV cache, depending only weakly on prompt length, so it is fast. Mitigations: (1) if the same document is queried repeatedly, enable prefix caching (e.g. vLLM\'s automatic prefix caching) to reuse computed KV, so later requests barely need prefill; (2) put only relevant passages in the prompt (retrieval) to reduce n; (3) use more GPUs with tensor parallelism or faster hardware to shorten prefill; (4) enable chunked prefill so one long prompt does not stall other requests\' decode (this helps overall experience rather than this request\'s own TTFT).']},
c82e3:{k:'expl',q:['运维把 --max-model-len 从 16384 改成 131072，其他参数不变。用数字说明这对“能同时运行多少个满长度请求”有什么影响，并给出两种在不换模型的前提下提高并发的做法及其代价。','Operations change --max-model-len from 16384 to 131072, everything else unchanged. Use numbers to show the effect on how many full-length requests can run at once, and give two ways to raise concurrency without changing the model, with their costs.'],
 a:['一个满长度请求的 KV 从 128 KiB × 16384 = 2 GiB 变为 128 KiB × 131072 = 16 GiB。按 8.2 练习中约 53 GiB 的 KV 预算，满长度请求从约 26 个降到约 3 个（只要请求实际较短，分页分配仍能同时容纳更多）。提高并发的做法：(1) KV 缓存使用 FP8（vLLM 的 --kv-cache-dtype fp8），每 token 减半为 64 KiB，满长度并发约翻倍；代价是可能的精度损失，需评测。(2) 权重量化为 FP8 或 INT4，把约 15 GiB 降到约 7.5 或 4 GiB，腾出空间给 KV；代价同样是可能的质量下降。(3) 用 2 张 GPU 做张量并行（--tensor-parallel-size 2），每卡权重减半、KV 总空间增加；代价是硬件成本和卡间通信开销。(4) 如果业务不需要这么长的上下文，就保持较小的 max-model-len。','One full-length request\'s KV grows from 128 KiB × 16384 = 2 GiB to 128 KiB × 131072 = 16 GiB. With the roughly 53 GiB KV budget from the exercise, full-length concurrency drops from about 26 to about 3 (paged allocation still fits more if real requests are shorter). Ways to raise concurrency: (1) store the KV cache in FP8 (vLLM\'s --kv-cache-dtype fp8), halving it to 64 KiB per token and roughly doubling full-length concurrency; cost: possible accuracy loss, which needs evaluation. (2) Quantize weights to FP8 or INT4, shrinking about 15 GiB to about 7.5 or 4 GiB and freeing room for KV; cost: possible quality loss. (3) Use 2 GPUs with tensor parallelism (--tensor-parallel-size 2), halving weights per GPU and adding KV space; cost: hardware and inter-GPU communication. (4) If the application does not need such long contexts, keep max-model-len smaller.']}
});
Object.assign(G,{
api:['API 服务','API server','接收 HTTP 请求、应用对话模板、流式返回 token 的服务层，常为 OpenAI 兼容格式。','The service layer receiving HTTP requests, applying the chat template and streaming tokens back, often OpenAI-compatible.','c76'],
sse:['服务器发送事件','Server-Sent Events (SSE)','一种 HTTP 流式响应格式，用于逐段发送生成的文字。','An HTTP streaming format used to send generated text piece by piece.','c81'],
scheduler:['调度器','scheduler','推理引擎中决定哪些请求进入当前批次、何时预填充/解码的组件。','The engine component deciding which requests join the current batch and when to prefill or decode.','c81'],
maxlen:['最大模型长度','max model length','某次部署允许的最大上下文（提示 + 输出）；可小于模型支持的长度。','The maximum context (prompt + output) a deployment allows; may be less than the model supports.','c82']
});


const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const L=(zh,en)=>`<span class="zh">${zh}</span><span class="en">${en}</span>`;
const LB=(zh,en)=>`<div class="pair"><div class="zh">${zh}</div><div class="en">${en}</div></div>`;
const f=(v,d=3)=>{if(!isFinite(v))return '—';let r=Math.round(v*10**d)/10**d;if(Object.is(r,-0))r=0;return (r<0?'−':'')+Math.abs(r)};
const clone=o=>JSON.parse(JSON.stringify(o));
const KEY='llm-course-v1';
const DEFX={};
const DEF=()=>Object.assign({mode:'zh',view:'map',done:{},quiz:{},notes:{},rev:{},sel:'5.3',
 vec:{a:[2,1],w:[1,3]},
 vec8:{a:[0.6,-0.2,0.9,0.1,-0.7,0.4,0,-0.3],w:[0.5,0.3,0.8,-0.4,-0.6,0.2,0.7,-0.1]},
 neuron:{x:[1,2,-1],w:[0.5,-0.25,1],b:0.5,act:'relu'},
 mm:{x:[1,2,-1],W:[[0.5,-1,0.25,1],[1,0.5,-0.5,0],[0.5,1,1,-0.5]],b:[0.5,0,1,-0.5],relu:true,step:0,speed:1},
 sh:[1,3,3,4],
 xor:{W1:[[1,1],[1,1]],b1:[0,-1],W2:[1,-2],b2:0,act:'relu',sel:3},
 grid:{W1:[[1,2],[0,1]],b1:[0,0],W2:[[2,0],[1,1]],b2:[0,0],relu:false}},clone(DEFX));
let S;
try{const r=JSON.parse(localStorage.getItem(KEY)||'null');S=Object.assign(DEF(),r||{})}catch(e){S=DEF()}
if(S.view==='sample')S.view='p23';
function regDef(k,v){DEFX[k]=v;if(S[k]==null)S[k]=clone(v)}
let saveT;function save(){clearTimeout(saveT);saveT=setTimeout(()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}},150)}
const SEC=Object.fromEntries(SECS.map(s=>[s[0],s]));

/* ---------- reading mode, keeping the reader's place ---------- */
function anchorEl(){const top=$('.top').getBoundingClientRect().bottom+4;
  for(const el of $$('main .view:not([hidden]) :is(.pair,.lab,.quiz,.explain,.sec-head,.note,.tw,.formula,h3,h4)')){
    const r=el.getBoundingClientRect(); if(r.bottom>top&&r.height>0) return [el,r.top];}
  return [null,0]}
function setMode(m,keep=true){const [el,t0]=keep?anchorEl():[null,0];
  document.documentElement.dataset.mode=m;S.mode=m;save();
  $$('button[data-mode]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.mode===m));
  document.documentElement.lang=m==='en'?'en':'zh-Hans';
  $$('[data-zh]').forEach(el=>{const t=m==='zh'?el.dataset.zh:m==='en'?el.dataset.en:el.dataset.zh+' / '+el.dataset.en;if(el.tagName==='INPUT')el.placeholder=t;else el.textContent=t});
  if(el){window.scrollBy(0,el.getBoundingClientRect().top-t0)}
  redrawAll()}
$$('button[data-mode]').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));

/* ---------- views & navigation ---------- */
const viewOf=id=>{const el=document.getElementById(id);return el?el.closest('[data-view-root]')?.dataset.viewRoot:null};
function setView(v,scrollTo){S.view=v;save();
  $$('.view').forEach(d=>d.hidden=d.dataset.viewRoot!==v);
  $$('button[data-view]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.view===v));
  $('#partSel').value=v==='map'?'':v;
  $$('#tocAll .tp').forEach(g=>g.classList.toggle('open',g.dataset.v===v));
  if(scrollTo){const el=document.getElementById(scrollTo);if(el)el.scrollIntoView()}else window.scrollTo(0,0);
  redrawAll()}
function go(id){const v=viewOf(id);if(!v)return;if(v!==S.view)setView(v,id);else document.getElementById(id)?.scrollIntoView();
  try{history.replaceState(null,'','#'+id)}catch(e){}
  $('#toc').classList.remove('open')}
$$('button[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));
document.addEventListener('click',e=>{const g=e.target.closest('[data-goto]');if(g){go(g.dataset.goto);return}
  const a=e.target.closest('a[href^="#"]');if(!a)return;const id=a.getAttribute('href').slice(1);if(viewOf(id)){e.preventDefault();go(id)}});
$('#navToggle').onclick=()=>$('#toc').classList.toggle('open');
$('#partSel').innerHTML=`<option value="" data-zh="选择部分…" data-en="Choose a part…"></option>`+VIEWS.map(v=>`<option value="${v[0]}" data-zh="${v[1]}：${v[3]}" data-en="${v[2]}: ${v[4]}"></option>`).join('');
$('#partSel').onchange=e=>{if(e.target.value)setView(e.target.value)};

/* ---------- TOC & progress ---------- */
$('#tocAll').innerHTML=VIEWS.map(([v,zh,en,tz,te])=>{const ss=SECS.filter(s=>s[1]===v);const m=ss.reduce((a,s)=>a+s[5],0);
  return `<div class="tp" data-v="${v}"><h4><a href="#${ss[0][0]}" class="tph">${L(zh,en)} · ${L(tz,te)}<span class="tm" data-pc="${v}"></span></a></h4>
  <div class="tps">${ss.map(([id,,num,z,e,mm])=>`<a href="#${id}" data-toc="${id}"><span class="ck"></span><span><span class="mono" style="color:var(--muted);font-size:11.5px">${num}</span> ${L(z,e)}</span><span class="tm">${mm}′</span></a>`).join('')}</div></div>`}).join('');
function renderProgress(){const n=SECS.filter(s=>S.done[s[0]]).length;
  $('#progBar').style.width=(n/SECS.length*100)+'%';$('#progTxt').textContent=n+'/'+SECS.length;
  $$('[data-toc]').forEach(a=>a.classList.toggle('done',!!S.done[a.dataset.toc]));
  $$('[data-pc]').forEach(s=>{const ss=SECS.filter(x=>x[1]===s.dataset.pc);s.textContent=ss.filter(x=>S.done[x[0]]).length+'/'+ss.length});
  $$('button.mark').forEach(b=>{const d=!!S.done[b.dataset.done];b.classList.toggle('done',d);
    b.innerHTML=d?L('✓ 已完成（点击取消）','✓ Completed (click to undo)'):L('标记本章为已完成','Mark this chapter complete')});
  if(typeof selectCh==='function'&&$('#pmap').children.length)selectCh()}
document.addEventListener('click',e=>{const b=e.target.closest('button.mark');if(!b)return;const k=b.dataset.done;S.done[k]=!S.done[k];save();renderProgress()});
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){$$('#toc a').forEach(a=>a.classList.toggle('cur',a.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-20% 0px -70% 0px'});
$$('section.sec').forEach(s=>io.observe(s));
// section headers: chapter number + time + done buttons are declared in markup; part nav built here
$$('.partnav').forEach(d=>{const i=VIEWS.findIndex(v=>v[0]===d.dataset.pn);const pv=VIEWS[i-1],nx=VIEWS[i+1];
  d.innerHTML=`<div class="controls" style="justify-content:space-between;margin-top:30px">${pv?`<button class="btn" data-goto="${SECS.find(s=>s[1]===pv[0])[0]}">← ${L(pv[1]+'：'+pv[3],pv[2]+': '+pv[4])}</button>`:`<button class="btn" data-view="map">← ${L('课程地图','Course map')}</button>`}
  ${nx?`<button class="btn primary" data-goto="${SECS.find(s=>s[1]===nx[0])[0]}">${L(nx[1]+'：'+nx[3],nx[2]+': '+nx[4])} →</button>`:`<button class="btn primary" data-view="map">${L('回到课程地图','Back to the course map')} →</button>`}</div>`});
$$('.partnav button[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));

/* ---------- quizzes ---------- */
function renderQuiz(box){const id=box.dataset.q,q=Q[id];if(!q){box.textContent='missing quiz '+id;return}
  box.innerHTML=`<div class="qtag">${L(KIND[q.k][0],KIND[q.k][1])}</div>${LB(q.q[0],q.q[1])}
  <div class="choices">${q.c.map((c,i)=>`<button class="choice" data-i="${i}">${L(c[0],c[1])}</button>`).join('')}</div><div class="fb" hidden></div>`;
  const show=i=>{const c=q.c[i];$$('.choice',box).forEach((b,j)=>{b.classList.toggle('right',j==i&&!!c[4]);b.classList.toggle('wrong',j==i&&!c[4])});
    const fb=$('.fb',box);fb.hidden=false;
    fb.innerHTML=(c[4]?`<b class="ok">${L('正确','Correct')}</b> `:`<b class="bad">${L('还不对，再试一次','Not quite. Try again')}</b> `)+LB(c[2],c[3])};
  $$('.choice',box).forEach(b=>b.onclick=()=>{S.quiz[id]=+b.dataset.i;save();show(+b.dataset.i)});
  if(S.quiz[id]!=null)show(S.quiz[id])}
function renderExplain(box){const id=box.dataset.q,q=E[id];if(!q){box.textContent='missing prompt '+id;return}
  box.innerHTML=`<div class="qtag">${L(KIND[q.k][0],KIND[q.k][1])}</div>${LB(q.q[0],q.q[1])}
  <textarea id="note-${id}" aria-label="your answer"></textarea>
  <div class="controls"><button class="btn rv">${L('先写下你的答案，再查看参考解释','Write your answer, then reveal the model explanation')}</button></div>
  <div class="answer" hidden><b>${L('参考解释','Model explanation')}</b>${LB(q.a[0],q.a[1])}</div>`;
  const ta=$('textarea',box);ta.value=S.notes[id]||'';ta.oninput=()=>{S.notes[id]=ta.value;save()};
  const rv=()=>{$('.answer',box).hidden=false;$('.rv',box).innerHTML=L('已显示参考解释','Explanation shown')};
  $('.rv',box).onclick=()=>{S.rev[id]=1;save();rv()};if(S.rev[id])rv()}
$$('.quiz').forEach(renderQuiz);$$('.explain').forEach(renderExplain);

/* ---------- glossary ---------- */
function renderGloss(filter='',hit=null){const fl=filter.trim().toLowerCase();
  $('#glist').innerHTML=Object.entries(G).sort((a,b)=>a[1][1].localeCompare(b[1][1])).filter(([k,g])=>!fl||(g[0]+g[1]+g[2]+g[3]).toLowerCase().includes(fl)).map(([k,g])=>{
    const s=SEC[g[4]];
    return `<div class="gi ${k===hit?'hit':''}" id="g-${k}"><b>${L(g[0],g[1])}</b>${LB(g[2],g[3])}<div class="gt"><a href="#${g[4]}">${L('首次出现：','First introduced: ')}${s?s[2]+' '+L(s[3],s[4]):''}</a></div></div>`}).join('')}
function openGloss(k){$('#gloss').hidden=false;$('#gSearch').value='';renderGloss('',k);if(k)$('#g-'+k)?.scrollIntoView({block:'center'})}
$('#glossBtn').onclick=()=>{if($('#gloss').hidden)openGloss();else $('#gloss').hidden=true};
$('#gClose').onclick=()=>$('#gloss').hidden=true;
$('#gSearch').oninput=e=>renderGloss(e.target.value);
$$('.term').forEach(t=>{t.tabIndex=0;t.setAttribute('role','button');
  const h=()=>openGloss(t.dataset.t);t.onclick=h;t.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();h()}}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#gloss').hidden=true;$('#confirm').hidden=true}});

/* ---------- reset ---------- */
$('#resetAll').onclick=()=>{$('#confirm').hidden=false};
$('#cfNo').onclick=()=>{$('#confirm').hidden=true};
$('#cfYes').onclick=()=>{const m=S.mode,v=S.view;S=DEF();S.mode=m;S.view=v;try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}location.reload()};

/* ---------- course map ---------- */
const byId=Object.fromEntries(CH.map(c=>[c.id,c]));
function ancestors(id,acc=new Set()){for(const p of byId[id].pre){if(!acc.has(p)){acc.add(p);ancestors(p,acc)}}return acc}
function renderMap(){
  $('#pmap').innerHTML=PARTS.map(([p,zh,en])=>`<div class="pcol"><h5>${p==='D'?'':(L('第 '+p+' 部分','Part '+p)+'<br>')}${L(zh,en)}</h5>${
    CH.filter(c=>c.p===p).map(c=>`<button class="chip" data-ch="${c.id}"><span class="id">${c.id} · ${c.m}′</span><br>${L(c.t[0],c.t[1])}</button>`).join('')}</div>`).join('');
  $$('.chip').forEach(b=>b.onclick=()=>{S.sel=b.dataset.ch;save();selectCh()});selectCh()}
function selectCh(){const id=S.sel;if(!byId[id])return;const c=byId[id];
  const direct=new Set(c.pre),all=ancestors(id),deps=new Set(CH.filter(x=>x.pre.includes(id)).map(x=>x.id));
  $$('.chip').forEach(b=>{const k=b.dataset.ch;b.className='chip'+(byId[k].p!=='D'&&S.done[byId[k].sec]?' sample':'')+(k===id?' sel':direct.has(k)?' pre':all.has(k)?' pre2':deps.has(k)?' dep':' dim')});
  const nm=k=>`${k} ${L(byId[k].t[0],byId[k].t[1])}`;
  $('#pdetail').innerHTML=`<b class="mono">${c.id}</b> <b>${L(c.t[0],c.t[1])}</b> <span class="pill">${c.m} min</span>${c.p==='D'?`<span class="pill">${L('选修','optional')}</span>`:''}
   ${LB(c.s[0],c.s[1])}
   ${c.lab[0]&&c.lab[0]!=='—'?`<p style="margin:6px 0">${L('互动实验：','Interactive: ')}${L(c.lab[0],c.lab[1])}</p>`:''}
   <p style="margin:6px 0">${L('直接前置：','Direct prerequisites: ')}${c.pre.length?c.pre.map(nm).join('；'):L('无','none')}</p>
   <p style="margin:0 0 8px">${L('依赖它的章节：','Chapters that depend on it: ')}${deps.size?[...deps].map(nm).join('；'):L('无','none')}</p>
   <button class="btn primary" data-goto="${c.sec}">${c.p==='D'?L('打开所在章节','Open the host chapter'):L('打开本章','Open this chapter')} →</button>`}
function renderOutline(){
  $('#outline').innerHTML=PARTS.map(([p,zh,en])=>{const cs=CH.filter(c=>c.p===p);const tot=cs.reduce((a,c)=>a+c.m,0);
    return `<h3>${p==='D'?'':L('第 '+p+' 部分 · ','Part '+p+' · ')}${L(zh,en)} <span class="pill">${tot} min</span></h3>
    <div class="tw"><table class="t"><tr><th>#</th><th>${L('章节与内容','Chapter and content')}</th><th>${L('前置','Prereqs')}</th><th>${L('时间','Time')}</th></tr>
    ${cs.map(c=>`<tr><td class="mono"><a href="#${c.sec}">${c.id}</a></td><td><b>${L(c.t[0],c.t[1])}</b><br>${L(c.s[0],c.s[1])}${c.lab[0]&&c.lab[0]!=='—'?`<br><span style="color:var(--muted)">${L('实验：','Lab: ')}${L(c.lab[0],c.lab[1])}</span>`:''}</td><td class="mono">${c.pre.join(', ')||'—'}</td><td class="num">${c.m}′</td></tr>`).join('')}</table></div>`}).join('')}
function renderTime(){let core=0;
  const rows=VIEWS.map(([v,zh,en,tz,te])=>{const m=SECS.filter(s=>s[1]===v).reduce((a,s)=>a+s[5],0);core+=m;
    return `<tr><td>${L(zh,en)}</td><td>${L(tz,te)}</td><td class="num">${m}</td><td class="num">${(m/60).toFixed(1)}</td></tr>`}).join('');
  const opt=CH.filter(c=>c.p==='D').reduce((a,c)=>a+c.m,0);
  $('#timeTable').innerHTML=`<table class="t"><tr><th></th><th></th><th>${L('分钟','Minutes')}</th><th>${L('小时','Hours')}</th></tr>${rows}
   <tr><td colspan="2"><b>${L('核心路径合计','Core path total')}</b></td><td class="num"><b>${core}</b></td><td class="num"><b>${(core/60).toFixed(1)}</b></td></tr>
   <tr><td colspan="2">${L('选修深入内容（D1–D9，嵌在各章的“深入”折叠框中）','Optional deeper material (D1–D9, in “Deeper” boxes inside chapters)')}</td><td class="num">${opt}</td><td class="num">${(opt/60).toFixed(1)}</td></tr></table>`}
renderMap();renderOutline();renderTime();


const REDRAW=[],INIT=[];
function redrawAll(){REDRAW.forEach(fn=>{try{fn()}catch(e){console.error(e)}})}
const tok=n=>getComputedStyle(document.body).getPropertyValue(n).trim();
function setupCanvas(c){const dpr=window.devicePixelRatio||1,w=c.clientWidth,h=c.clientHeight;
  if(c.width!==Math.round(w*dpr)||c.height!==Math.round(h*dpr)){c.width=Math.round(w*dpr);c.height=Math.round(h*dpr)}
  const x=c.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);x.clearRect(0,0,w,h);return [x,w,h]}
function arrow(ctx,x0,y0,x1,y1,col,lw=2.5){ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineWidth=lw;ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(x1,y1);ctx.stroke();
  const a=Math.atan2(y1-y0,x1-x0),s=9;if(Math.hypot(x1-x0,y1-y0)<2)return;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x1-s*Math.cos(a-0.4),y1-s*Math.sin(a-0.4));ctx.lineTo(x1-s*Math.cos(a+0.4),y1-s*Math.sin(a+0.4));ctx.closePath();ctx.fill()}

/* ===== Lab A1: 2D vectors ===== */
const R=4;
function vecGeom(){const c=$('#vecCanvas'),w=c.clientWidth,h=c.clientHeight,sc=Math.min(w,h)/(2*R+0.6);return {sc,cx:w/2,cy:h/2}}
function drawVec(){const c=$('#vecCanvas');if(!c.clientWidth)return;const [x,w,h]=setupCanvas(c);const {sc,cx,cy}=vecGeom();const P=(a,b)=>[cx+a*sc,cy-b*sc];
  const {a,w:v}=S.vec;x.lineWidth=1;x.strokeStyle=tok('--line');
  for(let i=-R;i<=R;i++){let [p,q]=P(i,-R),[r,s]=P(i,R);x.beginPath();x.moveTo(p,q);x.lineTo(r,s);x.stroke();[p,q]=P(-R,i);[r,s]=P(R,i);x.beginPath();x.moveTo(p,q);x.lineTo(r,s);x.stroke()}
  x.strokeStyle=tok('--muted');x.beginPath();x.moveTo(...P(-R,0));x.lineTo(...P(R,0));x.moveTo(...P(0,-R));x.lineTo(...P(0,R));x.stroke();
  const ww=v[0]*v[0]+v[1]*v[1],dot=a[0]*v[0]+a[1]*v[1];
  if(ww>0){const t=dot/ww,p=[t*v[0],t*v[1]];x.lineWidth=6;x.strokeStyle=dot>=0?tok('--pos'):tok('--neg');x.globalAlpha=.45;x.beginPath();x.moveTo(...P(0,0));x.lineTo(...P(...p));x.stroke();x.globalAlpha=1;
    x.setLineDash([4,4]);x.lineWidth=1.3;x.strokeStyle=tok('--muted');x.beginPath();x.moveTo(...P(...a));x.lineTo(...P(...p));x.stroke();x.setLineDash([])}
  arrow(x,...P(0,0),...P(...v),tok('--par'));arrow(x,...P(0,0),...P(...a),tok('--act'));
  x.font='600 13px '+tok('--mono');x.fillStyle=tok('--act');x.fillText('a',...P(a[0]+.15,a[1]+.15));x.fillStyle=tok('--par');x.fillText('w',...P(v[0]+.15,v[1]+.15))}
function vecRead(){const {a,w}=S.vec;const dot=a[0]*w[0]+a[1]*w[1],la=Math.hypot(...a),lw=Math.hypot(...w);
  const cos=la&&lw?dot/(la*lw):NaN,th=isFinite(cos)?Math.acos(Math.max(-1,Math.min(1,cos)))*180/Math.PI:NaN;
  const sign=!isFinite(cos)?L('有一个向量长度为 0，夹角无定义','one vector has length 0, so the angle is undefined'):Math.abs(dot)<1e-9?L('垂直：点积为 0','perpendicular: dot product is 0'):dot>0?L('方向大体一致：正','broadly the same direction: positive'):L('方向大体相反：负','broadly opposite: negative');
  $('#vecOut').innerHTML=`a·w = <span class="a">${f(a[0])}</span>×<span class="p">${f(w[0])}</span> + <span class="a">${f(a[1])}</span>×<span class="p">${f(w[1])}</span> = ${f(a[0]*w[0])} + ${f(a[1]*w[1])} = <span class="big">${f(dot)}</span><br>|a| = ${f(la)} &nbsp; |w| = ${f(lw)}<br>cos θ = ${f(cos)} &nbsp; θ ≈ ${f(th,1)}°<br>${sign}`;
  ['va0','va1'].forEach((id,i)=>{if(document.activeElement!==$('#'+id))$('#'+id).value=a[i]});['vw0','vw1'].forEach((id,i)=>{if(document.activeElement!==$('#'+id))$('#'+id).value=w[i]})}
function vecUpdate(){vecRead();drawVec();save()}
[['va0','a',0],['va1','a',1],['vw0','w',0],['vw1','w',1]].forEach(([id,k,i])=>$('#'+id).oninput=e=>{const v=parseFloat(e.target.value);if(isFinite(v)){S.vec[k][i]=Math.max(-R,Math.min(R,v));vecRead();drawVec();save()}});
$('#vecReset').onclick=()=>{S.vec=DEF().vec;vecUpdate()};
(()=>{const c=$('#vecCanvas');let drag=null;
  const pt=e=>{const r=c.getBoundingClientRect(),{sc,cx,cy}=vecGeom();return [(e.clientX-r.left-cx)/sc,-(e.clientY-r.top-cy)/sc]};
  c.addEventListener('pointerdown',e=>{const p=pt(e),{sc}=vecGeom();const da=Math.hypot(p[0]-S.vec.a[0],p[1]-S.vec.a[1]),dw=Math.hypot(p[0]-S.vec.w[0],p[1]-S.vec.w[1]);
    drag=Math.min(da,dw)*sc<28?(da<=dw?'a':'w'):(da<=dw?'a':'w');c.setPointerCapture(e.pointerId);move(e)});
  const move=e=>{if(!drag)return;const p=pt(e).map(v=>Math.max(-R,Math.min(R,Math.round(v*2)/2)));S.vec[drag]=p;vecUpdate()};
  c.addEventListener('pointermove',move);c.addEventListener('pointerup',()=>drag=null);c.addEventListener('pointercancel',()=>drag=null)})();

/* ===== Lab A2: 8-D ===== */
function bar(v,max,col){const w=Math.min(50,Math.abs(v)/max*50);return `<div class="bar2"><i style="background:${col};${v>=0?`left:50%`:`right:50%`};width:${w}%"></i><span>${f(v,2)}</span></div>`}
function renderV8(){const {a,w}=S.vec8,p=a.map((v,i)=>v*w[i]);const m=Math.max(1,...a.map(Math.abs),...w.map(Math.abs));const mp=Math.max(.5,...p.map(Math.abs));
  $('#bars8').innerHTML=`<span class="hd">i</span><span class="hd">a<sub>i</sub></span><span class="hd">w<sub>i</sub></span><span class="hd">a<sub>i</sub>·w<sub>i</sub></span>`+
   a.map((v,i)=>`<span>${i+1}</span>${bar(v,m,'var(--act)')}${bar(w[i],m,'var(--par)')}${bar(p[i],mp,p[i]>=0?'var(--pos)':'var(--neg)')}`).join('');
  const dot=p.reduce((s,v)=>s+v,0),la=Math.hypot(...a),lw=Math.hypot(...w);
  $('#vec8Out').innerHTML=`a·w = Σ a<sub>i</sub>w<sub>i</sub> = <span class="big">${f(dot)}</span> &nbsp; |a| = ${f(la)} &nbsp; |w| = ${f(lw)} &nbsp; cos θ = ${f(la&&lw?dot/(la*lw):NaN)}<br>${L('典型随机值 |cos θ| ≈ 1/√8 ≈ 0.35','typical random |cos θ| ≈ 1/√8 ≈ 0.35')}`;save()}
const rnd8=()=>Array.from({length:8},()=>Math.round((Math.random()*2-1)*10)/10);
$$('[data-v8]').forEach(b=>b.onclick=()=>{const k=b.dataset.v8,v=S.vec8;
  if(k==='randw')v.w=rnd8();if(k==='randa')v.a=rnd8();if(k==='same')v.w=[...v.a];if(k==='neg')v.w=v.a.map(x=>-x);if(k==='dbl')v.w=v.w.map(x=>Math.round(x*20)/10);if(k==='reset')S.vec8=DEF().vec8;renderV8()});

/* ===== Lab B: neuron ===== */
const ACT={relu:z=>Math.max(0,z),id:z=>z,gelu:z=>0.5*z*(1+Math.tanh(Math.sqrt(2/Math.PI)*(z+0.044715*z**3)))};
function buildNeuron(){const rows=[];for(let i=0;i<3;i++){rows.push(['x'+(i+1),'x',i,-2,2,'a']);}for(let i=0;i<3;i++){rows.push(['w'+(i+1),'w',i,-2,2,'p'])}rows.push(['b','b',null,-3,3,'p']);
  $('#neuronCtrl').innerHTML=rows.map(([n,k,i,lo,hi,c])=>`<label for="n-${n}" class="${c}">${n.replace(/(\d)/,'<sub>$1</sub>')}</label><input type="range" id="n-${n}" min="${lo}" max="${hi}" step="0.25" data-k="${k}" data-i="${i}"><output class="${c}" id="o-${n}"></output>`).join('');
  $$('#neuronCtrl input').forEach(r=>r.oninput=()=>{const v=+r.value;if(r.dataset.k==='b')S.neuron.b=v;else S.neuron[r.dataset.k][+r.dataset.i]=v;renderNeuron()});
  $('#nAct').onchange=e=>{S.neuron.act=e.target.value;renderNeuron()};
  $('#nReset').onclick=()=>{S.neuron=DEF().neuron;renderNeuron()}}
function renderNeuron(){const n=S.neuron;
  $$('#neuronCtrl input').forEach(r=>{const v=r.dataset.k==='b'?n.b:n[r.dataset.k][+r.dataset.i];r.value=v;r.nextElementSibling.textContent=f(v,2)});$('#nAct').value=n.act;
  const pr=n.x.map((v,i)=>v*n.w[i]),s=pr.reduce((a,b)=>a+b,0),z=s+n.b,h=ACT[n.act](z);
  const an={relu:'ReLU',gelu:'GELU',id:'identity'}[n.act];
  $('#neuronOut').innerHTML=pr.map((p,i)=>`<span class="a">${f(n.x[i],2)}</span>×<span class="p">${f(n.w[i],2)}</span> = ${f(p)}`).join('<br>')+
   `<br>${L('加权和','weighted sum')} = ${f(s)}<br>z = ${f(s)} + <span class="p">${f(n.b,2)}</span> = <b>${f(z)}</b><br>h = ${an}(${f(z)}) = <span class="big a">${f(h)}</span>`+
   (n.act==='relu'&&z<=0?`<br>${L('z ≤ 0，ReLU 输出 0：此时微调参数不改变输出','z ≤ 0, so ReLU outputs 0: small parameter changes do not change the output here')}`:'');
  // plot
  const W=260,H=150,zx=v=>20+(v+4)/8*(W-30),yy=v=>H-20-(v+1.5)/5.5*(H-30);let d='';
  for(let i=0;i<=80;i++){const zz=-4+i*0.1,yv=Math.max(-1.5,Math.min(4,ACT[n.act](zz)));d+=(i?'L':'M')+zx(zz).toFixed(1)+' '+yy(yv).toFixed(1)}
  const zc=Math.max(-4,Math.min(4,z)),hc=Math.max(-1.5,Math.min(4,h));
  $('#nPlot').innerHTML=`<line x1="20" x2="${W-10}" y1="${yy(0)}" y2="${yy(0)}" style="stroke:var(--line)"/><line x1="${zx(0)}" x2="${zx(0)}" y1="10" y2="${H-20}" style="stroke:var(--line)"/>
   <path d="${d}" fill="none" style="stroke:var(--fg)" stroke-width="2"/>
   <line x1="${zx(zc)}" x2="${zx(zc)}" y1="${yy(0)}" y2="${yy(hc)}" style="stroke:var(--act)" stroke-dasharray="3 3"/>
   <circle cx="${zx(zc)}" cy="${yy(hc)}" r="5" style="fill:var(--act)"/>
   <text x="${W-14}" y="${yy(0)+14}" font-size="11" text-anchor="end" class="svgmut">z</text><text x="${zx(0)+4}" y="18" font-size="11" class="svgmut">φ(z)</text>
   <text x="${zx(-4)}" y="${H-5}" font-size="10" class="svgmut">−4</text><text x="${zx(4)-8}" y="${H-5}" font-size="10" class="svgmut">4</text>`;save()}

/* ===== Lab C: matrix multiplication stepper ===== */
let mmTimer=null;
function mmSteps(){const st=[];for(let j=0;j<4;j++){for(let i=0;i<3;i++)st.push({t:'mul',i,j});st.push({t:'bias',j});if(S.mm.relu)st.push({t:'act',j})}return st}
function mmState(n){const m=S.mm,st=mmSteps(),acc=[0,0,0,0],stage=[0,0,0,0];// 0 none,1 summing,2 biased,3 activated
  for(let k=0;k<n&&k<st.length;k++){const s=st[k];if(s.t==='mul'){acc[s.j]+=m.x[s.i]*m.W[s.i][s.j];stage[s.j]=1}else if(s.t==='bias'){acc[s.j]+=m.b[s.j];stage[s.j]=2}else{acc[s.j]=Math.max(0,acc[s.j]);stage[s.j]=3}}
  return {acc,stage,cur:n>0?st[n-1]:null,total:st.length}}
function buildMM(){const g=$('#mmGrid');g.style.gridTemplateColumns='auto auto repeat(4,auto)';let h='';
  h+=`<span class="lbl">x [3]</span><span></span>`+[0,1,2,3].map(j=>`<span class="lbl">${L('神经元 ','neuron ')}${j+1}</span>`).join('');
  for(let i=0;i<3;i++){h+=`<span class="cell" id="mx${i}"><input class="nb a" type="number" step="0.25" data-x="${i}"></span><span class="lbl">×</span>`+[0,1,2,3].map(j=>`<span class="cell" id="mw${i}${j}"><input class="nb p" type="number" step="0.25" data-wi="${i}" data-wj="${j}"></span>`).join('')}
  h+=`<span></span><span class="lbl">Σ</span>`+[0,1,2,3].map(j=>`<span class="acc" id="ms${j}"></span>`).join('');
  h+=`<span class="lbl">b [4]</span><span class="lbl">+</span>`+[0,1,2,3].map(j=>`<span class="cell" id="mb${j}"><input class="nb p" type="number" step="0.25" data-b="${j}"></span>`).join('');
  h+=`<span class="lbl" id="mhLbl"></span><span class="lbl">=</span>`+[0,1,2,3].map(j=>`<span class="acc" id="mh${j}"></span>`).join('');
  g.innerHTML=h;
  $$('input',g).forEach(inp=>inp.oninput=()=>{const v=parseFloat(inp.value);if(!isFinite(v))return;const d=inp.dataset;
    if(d.x!=null)S.mm.x[+d.x]=v;else if(d.b!=null)S.mm.b[+d.b]=v;else S.mm.W[+d.wi][+d.wj]=v;renderMM(false)});
  $('#mmReset').onclick=()=>{mmStop();S.mm.step=0;renderMM()};
  $('#mmBack').onclick=()=>{mmStop();S.mm.step=Math.max(0,S.mm.step-1);renderMM()};
  $('#mmStep').onclick=()=>{mmStop();mmAdvance()};
  $('#mmEnd').onclick=()=>{mmStop();S.mm.step=mmSteps().length;renderMM()};
  $('#mmPlay').onclick=()=>{if(mmTimer)mmStop();else{if(S.mm.step>=mmSteps().length)S.mm.step=0;mmTimer=setInterval(mmAdvance,900/S.mm.speed);renderMM()}};
  $('#mmSpeed').onchange=e=>{S.mm.speed=+e.target.value;if(mmTimer){clearInterval(mmTimer);mmTimer=setInterval(mmAdvance,900/S.mm.speed)}save()};
  $('#mmRelu').onchange=e=>{mmStop();S.mm.relu=e.target.checked;S.mm.step=0;renderMM()};
  $('#mmDefaults').onclick=()=>{mmStop();const d=DEF().mm;Object.assign(S.mm,{x:d.x,W:d.W,b:d.b,step:0});renderMM()}}
function mmStop(){if(mmTimer){clearInterval(mmTimer);mmTimer=null}renderPlayBtn()}
function renderPlayBtn(){$('#mmPlay').innerHTML=mmTimer?L('⏸ 暂停','⏸ Pause'):L('▶ 自动播放','▶ Play')}
function mmAdvance(){const n=mmSteps().length;if(S.mm.step<n){S.mm.step++;renderMM()}if(S.mm.step>=n)mmStop()}
function renderMM(syncInputs=true){const m=S.mm,{acc,stage,cur,total}=mmState(m.step);
  $$('#mmGrid input').forEach(inp=>{if(document.activeElement===inp&&!syncInputs)return;const d=inp.dataset;inp.value=d.x!=null?m.x[+d.x]:d.b!=null?m.b[+d.b]:m.W[+d.wi][+d.wj]});
  $$('#mmGrid .hl').forEach(e=>e.classList.remove('hl'));
  for(let j=0;j<4;j++){const s=$('#ms'+j),h=$('#mh'+j);
    // running sum shows the weighted sum only (before bias)
    let sum=0,k=0;const st=mmSteps();for(let q=0;q<m.step;q++){if(st[q].t==='mul'&&st[q].j===j){sum+=m.x[st[q].i]*m.W[st[q].i][j];k++}}
    s.textContent=stage[j]?f(sum):'·';s.classList.toggle('dim',!stage[j]);
    h.textContent=stage[j]>=2?f(acc[j]):'·';h.classList.toggle('dim',stage[j]<2)}
  $('#mhLbl').innerHTML=m.relu?'h = ReLU(z)':'z';$('#mmRelu').checked=m.relu;$('#mmSpeed').value=m.speed;
  let narr;
  if(!cur)narr=LB('按“单步”开始。每一步对应一次乘法与累加。总共 '+total+' 步。','Press “Step” to begin. Each step is one multiply-and-add. '+total+' steps in total.');
  else if(cur.t==='mul'){const {i,j}=cur;$('#mx'+i).classList.add('hl');$('#mw'+i+j).classList.add('hl');$('#ms'+j).classList.add('hl');
    const p=m.x[i]*m.W[i][j];narr=LB(`第 ${m.step}/${total} 步：神经元 ${j+1} 的累加 += x<sub>${i+1}</sub> × W<sub>${i+1},${j+1}</sub> = ${f(m.x[i])} × ${f(m.W[i][j])} = ${f(p)}。${i===2?'这一列的点积完成了。':''}`,`Step ${m.step}/${total}: neuron ${j+1}'s sum += x<sub>${i+1}</sub> × W<sub>${i+1},${j+1}</sub> = ${f(m.x[i])} × ${f(m.W[i][j])} = ${f(p)}.${i===2?' The dot product for this column is complete.':''}`)}
  else if(cur.t==='bias'){const j=cur.j;$('#mb'+j).classList.add('hl');$('#mh'+j).classList.add('hl');
    narr=LB(`第 ${m.step}/${total} 步：加偏置 b<sub>${j+1}</sub> = ${f(m.b[j])}，得到预激活 z<sub>${j+1}</sub> = ${f(acc[j])}。`,`Step ${m.step}/${total}: add bias b<sub>${j+1}</sub> = ${f(m.b[j])}, giving pre-activation z<sub>${j+1}</sub> = ${f(acc[j])}.`)}
  else{const j=cur.j;$('#mh'+j).classList.add('hl');narr=LB(`第 ${m.step}/${total} 步：ReLU 作用于 z<sub>${j+1}</sub>，得到 h<sub>${j+1}</sub> = ${f(acc[j])}。${acc[j]===0?'负数被截为 0。':''}`,`Step ${m.step}/${total}: apply ReLU to z<sub>${j+1}</sub>, giving h<sub>${j+1}</sub> = ${f(acc[j])}.${acc[j]===0?' A negative value was clipped to 0.':''}`)}
  if(m.step>=total)narr+=LB(`完成：输出 = (${acc.map(v=>f(v)).join(', ')})，形状 [4]。共做了 12 次乘法（= 3 × 4），也就是 W 中每个数各用一次。`,`Done: output = (${acc.map(v=>f(v)).join(', ')}), shape [4]. That took 12 multiplications (= 3 × 4), one per number in W.`);
  $('#mmNarr').innerHTML=narr;$('#mmBack').disabled=m.step===0;renderPlayBtn();save()}

/* ===== shape checker ===== */
function renderShape(){const [a0,a1,b0,b1]=S.sh;['shA0','shA1','shB0','shB1'].forEach((id,i)=>{if(document.activeElement!==$('#'+id))$('#'+id).value=S.sh[i]});
  $('#shOut').innerHTML=a1===b0?`[${a0}, ${a1}] × [${b0}, ${b1}] → <span class="big ok">[${a0}, ${b1}]</span><br>${L(`${a0}×${b1} = ${(a0*b1).toLocaleString()} 个输出，每个是长度 ${a1} 的点积；共 ${(a0*a1*b1).toLocaleString()} 次乘法。`,`${(a0*b1).toLocaleString()} outputs, each a length-${a1} dot product; ${(a0*a1*b1).toLocaleString()} multiplications in total.`)}`
   :`[${a0}, ${a1}] × [${b0}, ${b1}] → <span class="big bad">${L('形状不匹配','shape mismatch')}</span><br>${L(`相邻维度 ${a1} ≠ ${b0}：A 的每一行有 ${a1} 个数，B 的每一列有 ${b0} 个数，无法做点积。`,`Touching dimensions ${a1} ≠ ${b0}: each row of A has ${a1} numbers and each column of B has ${b0}, so their dot product is undefined.`)}`;save()}
['shA0','shA1','shB0','shB1'].forEach((id,i)=>$('#'+id).oninput=e=>{const v=parseInt(e.target.value);if(v>0){S.sh[i]=v;renderShape()}});
$$('[data-sh]').forEach(b=>b.onclick=()=>{S.sh=b.dataset.sh.split(',').map(Number);renderShape()});


/* ===== Lab D: XOR network ===== */
const T3=(z,e)=>S.mode==='zh'?z:S.mode==='en'?e:z+' / '+e;
const CASES=[[0,0],[0,1],[1,0],[1,1]],XT=[0,1,1,0];
function xorF(x){const {W1,b1,W2,b2,act}=S.xor;const z=[0,1].map(j=>x[0]*W1[0][j]+x[1]*W1[1][j]+b1[j]);const h=z.map(v=>act==='relu'?Math.max(0,v):v);return {z,h,y:h[0]*W2[0]+h[1]*W2[1]+b2}}
function buildXor(){const fld=[['W₁ x₁→h₁','W1',0,0],['W₁ x₁→h₂','W1',0,1],['W₁ x₂→h₁','W1',1,0],['W₁ x₂→h₂','W1',1,1],['b₁ (h₁)','b1',0],['b₁ (h₂)','b1',1],['W₂ h₁→y','W2',0],['W₂ h₂→y','W2',1],['b₂','b2']];
  $('#xorW').innerHTML=fld.map((d,n)=>`<label for="xw${n}" class="p">${d[0]}</label><input class="nb p" type="number" step="0.5" id="xw${n}" data-n="${n}">`).join('');
  $$('#xorW input').forEach(inp=>inp.oninput=()=>{const v=parseFloat(inp.value);if(!isFinite(v))return;const d=fld[+inp.dataset.n];
    if(d[1]==='W1')S.xor.W1[d[2]][d[3]]=v;else if(d[1]==='b2')S.xor.b2=v;else S.xor[d[1]][d[2]]=v;renderXor(false)});
  xorFields=fld;
  $('#xorCases').innerHTML=CASES.map((c,i)=>`<button class="btn" data-xc="${i}">x = (${c})</button>`).join('');
  $$('[data-xc]').forEach(b=>b.onclick=()=>{S.xor.sel=+b.dataset.xc;renderXor()});
  $('#xorAct').onchange=e=>{S.xor.act=e.target.value;renderXor()};
  $$('[data-xp]').forEach(b=>b.onclick=()=>{const k=b.dataset.xp,d=DEF().xor;
    if(k==='good')Object.assign(S.xor,{W1:d.W1,b1:d.b1,W2:d.W2,b2:d.b2,act:'relu'});
    if(k==='break'){Object.assign(S.xor,{W1:d.W1,b1:d.b1,W2:d.W2,b2:d.b2,act:'relu'});S.xor.W1[1][1]=0}
    if(k==='rand'){const r=()=>Math.round((Math.random()*4-2)*2)/2;S.xor.W1=[[r(),r()],[r(),r()]];S.xor.b1=[r(),r()];S.xor.W2=[r(),r()];S.xor.b2=r()}
    renderXor()})}
let xorFields=[];
function renderXor(sync=true){const X=S.xor;
  $$('#xorW input').forEach(inp=>{if(!sync&&document.activeElement===inp)return;const d=xorFields[+inp.dataset.n];inp.value=d[1]==='W1'?X.W1[d[2]][d[3]]:d[1]==='b2'?X.b2:X[d[1]][d[2]]});
  $('#xorAct').value=X.act;$$('[data-xc]').forEach(b=>b.classList.toggle('primary',+b.dataset.xc===X.sel));
  const x=CASES[X.sel],{z,h,y}=xorF(x);
  const N={x1:[60,70],x2:[60,190],h1:[235,70],h2:[235,190],y:[410,130]},rN=26;
  const edge=(a,b,w,lx,ly)=>{const [x0,y0]=N[a],[x1,y1]=N[b];const sw=0.8+Math.min(3,Math.abs(w))*1.6;const col=w>0?'var(--pos)':w<0?'var(--neg)':'var(--line)';
    return `<line x1="${x0+rN}" y1="${y0}" x2="${x1-rN}" y2="${y1}" style="stroke:${col}" stroke-width="${sw}" ${w===0?'stroke-dasharray="4 4"':''}/>
    <text x="${lx}" y="${ly}" font-size="12" text-anchor="middle" style="fill:var(--par)">${f(w,2)}</text>`};
  const node=(k,lab,val,cls)=>{const [cx,cy]=N[k];return `<circle cx="${cx}" cy="${cy}" r="${rN}" style="fill:var(--surface);stroke:var(--${cls})" stroke-width="2"/>
    <text x="${cx}" y="${cy-4}" font-size="11" text-anchor="middle" class="svgmut">${lab}</text><text x="${cx}" y="${cy+12}" font-size="14" font-weight="600" text-anchor="middle" style="fill:var(--act)">${f(val,2)}</text>`};
  $('#xorSvg').innerHTML=edge('x1','h1',X.W1[0][0],150,58)+edge('x1','h2',X.W1[0][1],118,105)+edge('x2','h1',X.W1[1][0],118,160)+edge('x2','h2',X.W1[1][1],150,206)+
    edge('h1','y',X.W2[0],325,90)+edge('h2','y',X.W2[1],325,182)+
    node('x1','x₁',x[0],'act')+node('x2','x₂',x[1],'act')+node('h1','h₁',h[0],'act')+node('h2','h₂',h[1],'act')+node('y','y',y,'act')+
    `<text x="235" y="${70-rN-8}" font-size="11.5" text-anchor="middle" style="fill:var(--par)">b=${f(X.b1[0],2)}  z=${f(z[0],2)}</text>
     <text x="235" y="${190+rN+16}" font-size="11.5" text-anchor="middle" style="fill:var(--par)">b=${f(X.b1[1],2)}  z=${f(z[1],2)}</text>
     <text x="410" y="${130+rN+16}" font-size="11.5" text-anchor="middle" style="fill:var(--par)">b=${f(X.b2,2)}</text>
     <text x="60" y="250" font-size="11" text-anchor="middle" class="svgmut">${T3('输入','input')}</text><text x="235" y="250" font-size="11" text-anchor="middle" class="svgmut">${X.act==='relu'?T3('隐藏层（ReLU）','hidden (ReLU)'):T3('隐藏层（无激活）','hidden (none)')}</text><text x="410" y="250" font-size="11" text-anchor="middle" class="svgmut">${T3('输出','output')}</text>`;
  let okN=0;
  const rows=CASES.map((c,i)=>{const r=xorF(c),ok=Math.abs(r.y-XT[i])<0.05;okN+=ok;
    return `<tr style="${i===X.sel?'background:var(--surface-2)':''}"><td>(${c})</td><td>${f(r.z[0],2)}, ${f(r.z[1],2)}</td><td>${f(r.h[0],2)}, ${f(r.h[1],2)}</td><td><b>${f(r.y,2)}</b></td><td>${XT[i]}</td><td class="${ok?'ok':'bad'}">${ok?'✓':'✗'}</td></tr>`}).join('');
  $('#xorTable').innerHTML=`<tr><th>x</th><th>z = xW₁+b₁</th><th>h</th><th>y</th><th>${L('目标','target')}</th><th></th></tr>${rows}
   <tr><td colspan="6">${L(`四个输入中答对 ${okN} 个。`,`${okN} of 4 inputs correct.`)}${X.act==='id'?' '+L('没有激活函数时，这个网络是一个仿射函数，3.4 证明它不可能四个都对。','Without an activation the network is an affine function; Section 3.4 proves it cannot get all four right.'):''}</td></tr>`;save()}

/* ===== Lab E: grid through two layers ===== */
const GP=[];for(let i=-6;i<=6;i++)GP.push(i*0.25);
function gridMap(p){const g=S.grid;const z=[0,1].map(j=>p[0]*g.W1[0][j]+p[1]*g.W1[1][j]+g.b1[j]);const h=g.relu?z.map(v=>Math.max(0,v)):z;
  const o=[0,1].map(j=>h[0]*g.W2[0][j]+h[1]*g.W2[1][j]+g.b2[j]);return [p,z,h,o]}
function buildGrid(){const P=['x','z = xW₁+b₁',null,'y = hW₂+b₂'];
  $('#gridPanels').innerHTML=[0,1,2,3].map(k=>`<div><div style="font-size:12.5px;color:var(--muted);font-family:var(--mono)" id="gpl${k}"></div><canvas id="gc${k}" style="width:100%;aspect-ratio:1;border:1px solid var(--line);border-radius:6px;background:var(--bg)"></canvas></div>`).join('');
  const fld=[];['W1','W2'].forEach(M=>{for(let i=0;i<2;i++)for(let j=0;j<2;j++)fld.push([M,i,j])});['b1','b2'].forEach(B=>{for(let j=0;j<2;j++)fld.push([B,j])});
  $('#gridW').innerHTML=`<span class="p">W₁</span><span>${gIn(0)} ${gIn(1)}<br>${gIn(2)} ${gIn(3)}</span><span class="p">b₁</span><span>${gIn(8)} ${gIn(9)}</span><span class="p">W₂</span><span>${gIn(4)} ${gIn(5)}<br>${gIn(6)} ${gIn(7)}</span><span class="p">b₂</span><span>${gIn(10)} ${gIn(11)}</span>`;
  function gIn(n){return `<input class="nb p" type="number" step="0.5" data-g="${n}" aria-label="grid param ${n}">`}
  gridFields=fld;
  $$('#gridW input').forEach(inp=>inp.oninput=()=>{const v=parseFloat(inp.value);if(!isFinite(v))return;const d=fld[+inp.dataset.g];if(d.length===3)S.grid[d[0]][d[1]][d[2]]=v;else S.grid[d[0]][d[1]]=v;renderGrid(false)});
  $('#gridRelu').onchange=e=>{S.grid.relu=e.target.checked;renderGrid()};
  $('#gridReset').onclick=()=>{S.grid=DEF().grid;renderGrid()}}
let gridFields=[];
function drawPanel(c,lines,marks){if(!c.clientWidth)return;const [x,w,h]=setupCanvas(c);
  let xs=[0],ys=[0];lines.forEach(l=>l.pts.forEach(p=>{xs.push(p[0]);ys.push(p[1])}));
  let x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys);const span=Math.max(x1-x0,y1-y0,0.5)*1.12,cx=(x0+x1)/2,cy=(y0+y1)/2;
  const sc=w/span,P=p=>[w/2+(p[0]-cx)*sc,h/2-(p[1]-cy)*sc];
  x.strokeStyle=tok('--muted');x.lineWidth=1;x.globalAlpha=.6;x.beginPath();x.moveTo(0,P([0,0])[1]);x.lineTo(w,P([0,0])[1]);x.moveTo(P([0,0])[0],0);x.lineTo(P([0,0])[0],h);x.stroke();x.globalAlpha=1;
  const c1=tok('--c1'),c2=tok('--c2');
  lines.forEach(l=>{x.strokeStyle=l.dir?c2:c1;x.globalAlpha=0.35+0.5*l.t;x.lineWidth=1.2;x.beginPath();l.pts.forEach((p,i)=>{const q=P(p);i?x.lineTo(...q):x.moveTo(...q)});x.stroke()});x.globalAlpha=1;
  marks.forEach(([p,shape])=>{const [u,v]=P(p);x.fillStyle=tok('--fg');x.beginPath();if(shape==='c')x.arc(u,v,4.5,0,7);else{x.moveTo(u,v-6);x.lineTo(u+6,v);x.lineTo(u,v+6);x.lineTo(u-6,v)}x.fill()})}
function renderGrid(sync=true){const g=S.grid;
  $$('#gridW input').forEach(inp=>{if(!sync&&document.activeElement===inp)return;const d=gridFields[+inp.dataset.g];inp.value=d.length===3?g[d[0]][d[1]][d[2]]:g[d[0]][d[1]]});
  $('#gridRelu').checked=g.relu;
  $('#gpl0').textContent='x';$('#gpl1').textContent='z = xW₁ + b₁';$('#gpl2').innerHTML=g.relu?'h = ReLU(z)':L('h = z（无激活函数）','h = z (no activation)');$('#gpl3').textContent='y = hW₂ + b₂';
  const S1=[];for(let i=0;i<=40;i++)S1.push(-1.5+i*3/40);
  const lines=[0,1,2,3].map(()=>[]);
  GP.forEach((c,ci)=>{[0,1].forEach(dir=>{const pts=S1.map(s=>gridMap(dir?[c,s]:[s,c]));for(let k=0;k<4;k++)lines[k].push({dir,t:ci/(GP.length-1),pts:pts.map(p=>p[k])})})});
  const mk=[[1,1],[-1,1]].map(gridMap);
  for(let k=0;k<4;k++)drawPanel($('#gc'+k),lines[k],[[mk[0][k],'c'],[mk[1][k],'d']]);
  // combined linear map
  const W=[[0,0],[0,0]];for(let i=0;i<2;i++)for(let j=0;j<2;j++)W[i][j]=g.W1[i][0]*g.W2[0][j]+g.W1[i][1]*g.W2[1][j];
  const b=[0,1].map(j=>g.b1[0]*g.W2[0][j]+g.b1[1]*g.W2[1][j]+g.b2[j]);
  let md=0;GP.forEach(u=>GP.forEach(v=>{const o=gridMap([u,v])[3],l=[u*W[0][0]+v*W[1][0]+b[0],u*W[0][1]+v*W[1][1]+b[1]];md=Math.max(md,Math.abs(o[0]-l[0]),Math.abs(o[1]-l[1]))}));
  const m=W.map(r=>`(${f(r[0],2)}, ${f(r[1],2)})`).join(' ; ');
  $('#gridOut').innerHTML=`W₁W₂ = [ ${m} ]<br>b₁W₂ + b₂ = (${f(b[0],2)}, ${f(b[1],2)})<br>● (1, 1) → (${f(mk[0][3][0],2)}, ${f(mk[0][3][1],2)}) &nbsp; ◆ (−1, 1) → (${f(mk[1][3][0],2)}, ${f(mk[1][3][1],2)})<br>`+
   L('两层结果与“合并成一层”结果的最大差：','Max difference between the two-layer result and the merged single layer: ')+`<b class="${md<1e-9?'ok':'bad'}">${f(md,3)}</b><br>`+
   (g.relu?L('有 ReLU：网格线在坐标轴处被折弯，部分区域被压到轴上。没有任何单个线性层能弯曲直线。','With ReLU: grid lines bend at the axes and some regions are flattened onto them. No single linear layer can bend a straight line.')
          :L('没有激活函数：两层完全等价于上面这一个合并层。网格线仍是直的、平行的。','No activation: the two layers are exactly the single merged layer above. Grid lines stay straight and parallel.'));save()}

REDRAW.push(drawVec,renderGrid,renderXor);
INIT.push(()=>{buildNeuron();buildMM();buildXor();buildGrid();vecRead();renderV8();renderNeuron();renderMM();renderShape();renderXor();renderGrid()});


/* ===== Lab 1.1: swap weight files ===== */
const WF={A:{n:['异或 XOR','XOR'],W1:[[1,1],[1,1]],b1:[0,-1],W2:[1,-2],b2:0},
          B:{n:['与 AND','AND'],W1:[[1,0],[1,0]],b1:[-1,0],W2:[1,0],b2:0},
          C:{n:['或 OR','OR'],W1:[[1,1],[1,1]],b1:[0,-1],W2:[1,-1],b2:0}};
regDef('swap','A');
function renderSwap(){const k=S.swap,w=WF[k];
  $('#swapBtns').innerHTML=Object.keys(WF).map(K=>`<button class="btn ${K===k?'primary':''}" data-wf="${K}">${L('权重文件 '+K,'Weights file '+K)}</button>`).join('');
  $$('[data-wf]').forEach(b=>b.onclick=()=>{S.swap=b.dataset.wf;save();renderSwap()});
  $('#swapW').innerHTML=`<span class="p">W1</span> = [[${w.W1[0]}], [${w.W1[1]}]]<br><span class="p">b1</span> = [${w.b1}]<br><span class="p">W2</span> = [${w.W2}]<br><span class="p">b2</span> = ${w.b2}`;
  const run=(x)=>{const h=[0,1].map(j=>Math.max(0,x[0]*w.W1[0][j]+x[1]*w.W1[1][j]+w.b1[j]));return h[0]*w.W2[0]+h[1]*w.W2[1]+w.b2};
  $('#swapT').innerHTML=`<tr><th>x</th><th>${L('输出','output')}</th></tr>`+[[0,0],[0,1],[1,0],[1,1]].map(x=>`<tr><td>(${x})</td><td><b class="a">${f(run(x))}</b></td></tr>`).join('')+`<tr><td colspan="2">${L('这份文件实现：','This file implements: ')}<b>${L(w.n[0],w.n[1])}</b></td></tr>`}
INIT.push(renderSwap);

/* ===== Lab 1.2: projection ===== */
const PW=[['猫','cat',[0.9,0.8,0.1,0.0,0.3,0.1]],['狗','dog',[0.8,0.9,0.2,0.1,0.2,0.0]],['老虎','tiger',[0.9,0.2,0.1,0.0,0.9,0.1]],
 ['汽车','car',[0.0,0.1,0.9,0.8,0.1,0.2]],['卡车','truck',[0.1,0.0,0.8,0.9,0.3,0.1]],['香蕉','banana',[0.1,0.2,0.0,0.1,0.0,0.9]]];
regDef('proj',{x:0,y:1,w:0});
const cosv=(a,b)=>{let d=0,na=0,nb=0;a.forEach((v,i)=>{d+=v*b[i];na+=v*v;nb+=b[i]*b[i]});return d/Math.sqrt(na*nb)};
function renderProj(){const P=S.proj;
  ['projX','projY'].forEach((id,ax)=>{const s=$('#'+id);if(!s.options.length)s.innerHTML=[0,1,2,3,4,5].map(i=>`<option value="${i}">d${i+1}</option>`).join('');s.value=ax?P.y:P.x});
  const sc=v=>30+v*240;let g='';for(let t=0;t<=1.001;t+=0.25){g+=`<line x1="${sc(t)}" y1="30" x2="${sc(t)}" y2="270" style="stroke:var(--line)"/><line x1="30" y1="${300-sc(t)}" x2="270" y2="${300-sc(t)}" style="stroke:var(--line)"/>`}
  g+=`<text x="150" y="295" font-size="11" text-anchor="middle" class="svgmut">d${P.x+1}</text><text x="12" y="150" font-size="11" class="svgmut" transform="rotate(-90 12 150)">d${P.y+1}</text>`;
  PW.forEach(([zh,en,v],i)=>{const cx=sc(v[P.x]),cy=300-sc(v[P.y]);const sel=i===P.w;
    g+=`<circle cx="${cx}" cy="${cy}" r="${sel?7:5}" style="fill:${sel?'var(--act)':'var(--fg)'}"/><text x="${cx+8}" y="${cy-6}" font-size="12" class="svgfg" style="font-family:var(--sans)">${S.mode==='en'?en:S.mode==='zh'?zh:zh+' '+en}</text>`});
  $('#projSvg').innerHTML=g;
  $('#projWords').innerHTML=PW.map(([zh,en],i)=>`<button class="btn ${i===P.w?'primary':''}" data-pw="${i}">${L(zh,en)}</button>`).join('');
  $$('[data-pw]').forEach(b=>b.onclick=()=>{S.proj.w=+b.dataset.pw;renderProj()});
  const base=PW[P.w][2];const d2=v=>Math.hypot(v[P.x]-base[P.x],v[P.y]-base[P.y]);
  const rows=PW.map((w,i)=>[w,cosv(base,w[2]),d2(w[2]),i]).filter(r=>r[3]!==P.w).sort((a,b)=>b[1]-a[1]);
  $('#projT').innerHTML=`<tr><th></th><th>${L('6 维 cos','6-D cos')}</th><th>${L('图上距离','plot distance')}</th></tr>`+rows.map(([w,c,d])=>`<tr><td>${L(w[0],w[1])}</td><td>${f(c,2)}</td><td>${f(d,2)}</td></tr>`).join('');save()}
INIT.push(()=>{$('#projX').onchange=e=>{S.proj.x=+e.target.value;renderProj()};$('#projY').onchange=e=>{S.proj.y=+e.target.value;renderProj()};renderProj()});
REDRAW.push(renderProj);

/* ===== Lab 1.3: tensor browser ===== */
const TB=[['wte.weight',[50257,768],'emb','4.2'],['wpe.weight',[1024,768],'pos','4.3'],
 ['h.N.ln_1.weight / .bias',[768],'ln','4.4',2],['h.N.attn.c_attn.weight',[768,2304],'qkv','5.2'],['h.N.attn.c_attn.bias',[2304],'qkv','5.2'],
 ['h.N.attn.c_proj.weight',[768,768],'o','5.5'],['h.N.attn.c_proj.bias',[768],'o','5.5'],['h.N.ln_2.weight / .bias',[768],'ln','4.4',2],
 ['h.N.mlp.c_fc.weight',[768,3072],'mlp','3.4'],['h.N.mlp.c_fc.bias',[3072],'mlp','3.4'],['h.N.mlp.c_proj.weight',[3072,768],'mlp','3.4'],['h.N.mlp.c_proj.bias',[768],'mlp','3.4'],
 ['ln_f.weight / .bias',[768],'ln','4.4',2]];
const TBD={emb:['词嵌入表：每个 token 一行（50257 行），见 4.2。输出层与它共享（“权重共享”），所以没有单独的输出矩阵。','Token embedding table: one row per token (50257 rows), see 4.2. The output layer shares it (“weight tying”), so there is no separate output matrix.'],
 pos:['位置嵌入表：每个位置一行，最多 1024 个位置，见 4.3。这也是 GPT-2 上下文长度上限为 1024 的原因之一。','Position embedding table: one row per position, up to 1024, see 4.3. This is one reason GPT-2\'s context limit is 1024.'],
 ln:['LayerNorm 的缩放与偏移参数（weight 和 bias 各 768 个），见 4.4。','LayerNorm scale and shift parameters (768 each for weight and bias), see 4.4.'],
 qkv:['把 Q、K、V 三个投影合并成一个矩阵：768 → 3×768 = 2304，见 5.2。','Q, K and V projections fused into one matrix: 768 → 3×768 = 2304, see 5.2.'],
 o:['注意力输出投影 W_O，把各头拼接的结果混合回 768 维，见 5.5。','The attention output projection W_O, mixing the concatenated heads back to 768, see 5.5.'],
 mlp:['MLP 子层：768 → 3072 → 768，正是第 2–3 部分的“扩宽—非线性—投影回来”。','The MLP sublayer: 768 → 3072 → 768, the “widen, nonlinearity, project back” of Parts 2–3.']};
regDef('tb',{dt:4,sel:8});
function renderTB(){const T=S.tb;$('#tbDtype').value=T.dt;let tot=0;
  const rows=TB.map((r,i)=>{const n=r[1].reduce((a,b)=>a*b,1)*(r[4]||1);const per=r[0].startsWith('h.N')?12:1;const all=n*per;tot+=all;
    return `<tr data-tb="${i}" style="cursor:pointer;${i===T.sel?'background:var(--surface-2)':''}"><td class="mono" style="font-size:12.5px">${r[0]}</td><td class="mono">[${r[1].join(', ')}]${r[4]?' ×2':''}</td><td>${per===12?'×12':''}</td><td>${all.toLocaleString()}</td><td>${fmtB(all*T.dt)}</td></tr>`}).join('');
  $('#tbTable').innerHTML=`<tr><th>${L('张量','tensor')}</th><th>${L('形状','shape')}</th><th>${L('块','blocks')}</th><th>${L('参数','params')}</th><th>${L('字节','bytes')}</th></tr>${rows}<tr><td colspan="3"><b>${L('合计','Total')}</b></td><td><b>${tot.toLocaleString()}</b></td><td><b>${fmtB(tot*T.dt)}</b></td></tr>`;
  $$('[data-tb]').forEach(r=>r.onclick=()=>{S.tb.sel=+r.dataset.tb;renderTB()});
  const r=TB[T.sel],d=TBD[r[2]];$('#tbOut').innerHTML=`<b>${r[0]}</b> → ${L('见 ','see ')}<a href="#${SECS.find(s=>s[2].split('·').includes(r[3]))?.[0]||'c13'}">${r[3]}</a>${LB(d[0],d[1])}`;save()}
function fmtB(b){return b>=1e9?f(b/1e9,2)+' GB':b>=1e6?f(b/1e6,1)+' MB':b>=1e3?f(b/1e3,1)+' KB':b+' B'}
INIT.push(()=>{$('#tbDtype').onchange=e=>{S.tb.dt=+e.target.value;renderTB()};renderTB()});

/* ===== Lab 1.4: parameter count ===== */
const PCP={gpt2:{n:'GPT-2 small',V:50257,d:768,L:12,ff:3072,h:12,kv:12,gated:0,bias:1,ln:1,pos:1024,tied:1},
 l27:{n:'Llama 2 7B',V:32000,d:4096,L:32,ff:11008,h:32,kv:32,gated:1,bias:0,ln:0,pos:0,tied:0},
 l38:{n:'Llama 3.1 8B',V:128256,d:4096,L:32,ff:14336,h:32,kv:8,gated:1,bias:0,ln:0,pos:0,tied:0},
 l370:{n:'Llama 3.1 70B',V:128256,d:8192,L:80,ff:28672,h:64,kv:8,gated:1,bias:0,ln:0,pos:0,tied:0}};
regDef('pc',Object.assign({},PCP.gpt2));
function pcCalc(c){const kvd=c.d*c.kv/c.h;const emb=c.V*c.d+c.pos*c.d,head=c.tied?0:c.V*c.d;
  const attn=2*c.d*c.d+2*c.d*kvd+(c.bias?2*c.d+2*kvd:0);const mlp=(c.gated?3:2)*c.d*c.ff+(c.bias?c.ff+c.d:0);
  const norm=(c.ln?4:2)*c.d;const blk=attn+mlp+norm;const fin=(c.ln?2:1)*c.d;return {emb,head,attn,mlp,norm,blk,fin,tot:emb+head+c.L*blk+fin}}
function renderPC(){const c=S.pc;
  $('#pcPresets').innerHTML=Object.entries(PCP).map(([k,p])=>`<button class="btn" data-pcp="${k}">${p.n}</button>`).join('');
  $$('[data-pcp]').forEach(b=>b.onclick=()=>{S.pc=Object.assign({},PCP[b.dataset.pcp]);renderPC()});
  const F=[['V','vocab_size'],['d','hidden_size'],['L','num_hidden_layers'],['ff','intermediate_size'],['h','num_attention_heads'],['kv','num_key_value_heads'],['pos',L('学习的位置数（0 = RoPE）','learned positions (0 = RoPE)')],['gated',L('门控 MLP（SwiGLU）0/1','gated MLP (SwiGLU) 0/1')],['bias',L('线性层偏置 0/1','linear biases 0/1')],['ln',L('LayerNorm=1 / RMSNorm=0','LayerNorm=1 / RMSNorm=0')],['tied',L('输出层共享嵌入 0/1','tied output 0/1')]];
  if(!$('#pcCtrl').children.length){$('#pcCtrl').innerHTML=F.map(([k,lab])=>`<label class="mono" for="pc-${k}" style="font-family:var(--sans)">${lab}</label><input class="nb" id="pc-${k}" type="number" min="0" data-pc="${k}" style="width:7em">`).join('');
    $$('[data-pc]').forEach(i=>i.oninput=()=>{const v=parseInt(i.value);if(v>=0){S.pc[i.dataset.pc]=v;renderPC(false)}})}
  $$('[data-pc]').forEach(i=>{if(document.activeElement!==i)i.value=c[i.dataset.pc]});
  if(!c.h||c.kv>c.h||c.d%c.h){$('#pcOut').innerHTML=L('请检查：头数需整除 hidden_size，且 KV 头数不大于头数。','Check: heads must divide hidden_size, and KV heads must not exceed heads.');return}
  const r=pcCalc(c);
  $('#pcOut').innerHTML=`${L('嵌入表','embeddings')}: ${r.emb.toLocaleString()}<br>${L('输出层','output layer')}: ${r.head?r.head.toLocaleString():L('0（共享嵌入）','0 (tied to embeddings)')}<br>${L('每块：注意力','per block: attention')} ${r.attn.toLocaleString()} + MLP ${r.mlp.toLocaleString()} + ${L('归一化','norms')} ${r.norm.toLocaleString()} = ${r.blk.toLocaleString()}<br>× ${c.L} ${L('块','blocks')} = ${(r.blk*c.L).toLocaleString()} &nbsp;(${f(r.blk*c.L/r.tot*100,1)}%)<br>${L('最终归一化','final norm')}: ${r.fin.toLocaleString()}<br><span class="big">${L('合计','Total')}: ${r.tot.toLocaleString()} ≈ ${f(r.tot/1e9,2)}B</span><br>${L('BF16 权重','BF16 weights')}: ${f(r.tot*2/1e9,2)} GB · ${L('每 token 前向约','forward per token ≈')} ${(2*r.tot).toExponential(2)} FLOPs`;save()}
INIT.push(renderPC);

/* ===== Lab 2.1: tensor slices ===== */
regDef('sl','b');
const SLX=[[[0.2,-1.1,0.5,0.9],[1.3,0.0,-0.4,0.7],[-0.6,0.8,1.0,-0.2]],[[0.4,0.3,-0.9,1.2],[-1.0,0.6,0.1,0.5],[0.7,-0.3,0.2,-0.8]]];
function renderSL(){const m=S.sl;const modes={b:['X[1] → [3, 4]','X[1]'],i:['X[:, 2, :] → [2, 4]','X[:,2,:]'],j:['X[:, :, 0] → [2, 3]','X[:,:,0]'],e:['X[0, 1, 3] → []','X[0,1,3]'],all:['X → [2, 3, 4]','X']};
  $('#slBtns').innerHTML=Object.entries(modes).map(([k,v])=>`<button class="btn mono ${k===m?'primary':''}" data-sl="${k}">${v[1]}</button>`).join('');
  $$('[data-sl]').forEach(b=>b.onclick=()=>{S.sl=b.dataset.sl;save();renderSL()});
  const on=(b,i,j)=>m==='all'||(m==='b'&&b===1)||(m==='i'&&i===2)||(m==='j'&&j===0)||(m==='e'&&b===0&&i===1&&j===3);
  $('#slGrid').innerHTML=SLX.map((M,b)=>`<div><div class="mcap">b = ${b} · [3, 4]</div><table class="mat"><tr><th></th>${[0,1,2,3].map(j=>`<th>j=${j}</th>`).join('')}</tr>${M.map((r,i)=>`<tr><th>i=${i}</th>${r.map((v,j)=>`<td class="${on(b,i,j)?'hl':''}">${f(v,1)}</td>`).join('')}</tr>`).join('')}</table></div>`).join('');
  const msg={b:['固定第一个轴（序列 b=1）：得到这个序列所有位置的向量。','Fix the first axis (sequence b=1): all position vectors of that sequence.'],
   i:['固定第二个轴（位置 i=2）：两个序列各自第 3 个位置的向量。','Fix the second axis (position i=2): the third position\'s vector in each sequence.'],
   j:['固定第三个轴（分量 j=0）：所有序列、所有位置的第 1 个分量。','Fix the third axis (component j=0): component 1 at every sequence and position.'],
   e:['固定全部三个轴：一个标量。','Fix all three axes: a scalar.'],all:['全部 24 个数。','All 24 numbers.']}[m];
  $('#slOut').innerHTML=`<b>${modes[m][0]}</b>${LB(msg[0],msg[1])}`}
INIT.push(renderSL);

/* ===== Lab 2.5: softmax ===== */
regDef('sm',{z:[2,1,0,-1],T:1});
function smx(z,T){const s=z.map(v=>v/T),m=Math.max(...s),e=s.map(v=>Math.exp(v-m)),t=e.reduce((a,b)=>a+b,0);return e.map(v=>v/t)}
function renderSM(sync=true){const M=S.sm;
  if(!$('#smCtrl').children.length){$('#smCtrl').innerHTML=[0,1,2,3].map(i=>`<label for="smz${i}" class="a">z<sub>${i+1}</sub></label><input type="range" id="smz${i}" min="-6" max="8" step="0.5" data-sz="${i}"><output class="a"></output>`).join('')+`<label for="smT">T</label><input type="range" id="smT" min="0.1" max="4" step="0.05"><output></output>`;
    $$('[data-sz]').forEach(r=>r.oninput=()=>{S.sm.z[+r.dataset.sz]=+r.value;renderSM()});$('#smT').oninput=e=>{S.sm.T=+e.target.value;renderSM()};
    $('#smShift').onclick=()=>{S.sm.z=S.sm.z.map(v=>Math.min(8,v+1));renderSM()};$('#smDouble').onclick=()=>{S.sm.z=S.sm.z.map(v=>Math.max(-6,Math.min(8,v*2)));renderSM()};$('#smReset').onclick=()=>{S.sm=clone(DEFX.sm);renderSM()}}
  $$('[data-sz]').forEach(r=>{r.value=M.z[+r.dataset.sz];r.nextElementSibling.textContent=f(M.z[+r.dataset.sz],2)});$('#smT').value=M.T;$('#smT').nextElementSibling.textContent=f(M.T,2);
  const p=smx(M.z,M.T),e=M.z.map(v=>Math.exp(v/M.T)),t=e.reduce((a,b)=>a+b,0);
  $('#smBars').innerHTML=p.map((v,i)=>`<div style="display:grid;grid-template-columns:2.2em 1fr 4em;gap:8px;align-items:center;font-family:var(--mono);font-size:13px"><span>p${i+1}</span><div style="background:var(--bg);height:16px;border-radius:3px"><div style="width:${v*100}%;height:100%;background:var(--act);border-radius:3px"></div></div><span>${f(v,3)}</span></div>`).join('');
  $('#smOut').innerHTML=`e<sup>z/T</sup> = (${e.map(v=>f(v,3)).join(', ')})<br>Σ = ${f(t,3)} &nbsp; Σp = ${f(p.reduce((a,b)=>a+b,0),3)}`;save()}
INIT.push(renderSM);


/* ===== Lab 4.1: toy tokenizer ===== */
const TV=['<bos>','<eos>','the',' the','cat',' cat','s',' sat','sat',' on','on',' mat','mat','.',',','!','?',' ','un','believ','able',' un','token',' token','iz','ation',' model','model','ing','ed','er',' learn','learn',' is',' a','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','t','u','v','w','x','y','z',' dog',' saw','模型','学习','猫','的','我','你','是','了','大','语言','中'];
const TID=Object.fromEntries(TV.map((t,i)=>[t,(i*7919)%1009]));
function tokenize(s){const out=[];let i=0;while(i<s.length){let best=null;for(let L=Math.min(12,s.length-i);L>0;L--){const p=s.slice(i,i+L);if(TID[p]!=null){best=p;break}}
  if(best){out.push([best,TID[best],0]);i+=best.length}else{const ch=String.fromCodePoint(s.codePointAt(i));for(const b of new TextEncoder().encode(ch))out.push(['<0x'+b.toString(16).toUpperCase().padStart(2,'0')+'>',1009+b,1]);i+=ch.length}}return out}
regDef('tok',null);
const tokText=()=>S.tok??(S.mode==='en'?'the cat sat on the mat.':'模型学习的语言');
function renderTok(){const s=tokText();if(document.activeElement!==$('#tokIn'))$('#tokIn').value=s;const t=tokenize(s);
  $('#tokOut').innerHTML=t.map(([p,id,byte])=>`<span class="tok" style="${byte?'border-style:dashed':''}">${p.replace(/ /g,'␣').replace(/</g,'&lt;')}<small>${id}</small></span>`).join('');
  const bytes=t.filter(x=>x[2]).length;
  $('#tokSum').innerHTML=`${[...s].length} ${L('个字符','characters')} → <span class="big">${t.length}</span> ${L('个 token','tokens')}${bytes?` · ${bytes} ${L('个字节回退 token（虚线框）','byte-fallback tokens (dashed)')}`:''}<br>ID: [${t.map(x=>x[1]).join(', ')}]<br>${L('␣ 表示空格。','␣ marks a space.')}`;save()}
REDRAW.push(()=>{if(S.tok==null)renderTok()});
INIT.push(()=>{$('#tokIn').oninput=e=>{S.tok=e.target.value;renderTok()};$$('[data-tk]').forEach(b=>b.onclick=()=>{S.tok=b.dataset.tk;renderTok()});renderTok()});

/* ===== Lab 4.2: embedding ===== */
const EV=[[0.2,-0.5,0.8,0.1],[0.9,0.3,-0.2,0.6],[-0.4,0.7,0.1,-0.3],[0.1,0.1,-0.6,0.4],[0.7,0.2,0.0,0.5],[0.8,0.4,-0.1,0.7]];
const ETOK={zh:['我','喜欢','猫','你','狗','的'],en:['the','cat','sat','on','mat','dog']};
const ESENT={zh:[0,1,2,3,1,4],en:[0,1,2,3,0,4]};
regDef('emb',1);
function renderEmb(){const k=S.emb;
  $('#embBtns').innerHTML=['zh','en'].map(lg=>`<span class="${lg}">${ETOK[lg].map((t,i)=>`<button class="btn ${i===k?'primary':''}" data-eb="${i}">${t} (ID ${i})</button>`).join(' ')}</span>`).join('');
  $$('[data-eb]').forEach(b=>b.onclick=()=>{S.emb=+b.dataset.eb;save();renderEmb()});
  $('#embOH').innerHTML=`<table class="mat">${EV.map((_,i)=>`<tr><td class="${i===k?'hl':''}">${i===k?1:0}</td></tr>`).join('')}</table>`;
  $('#embE').innerHTML=`<table class="mat"><tr><th></th>${[1,2,3,4].map(j=>`<th>d${j}</th>`).join('')}</tr>${EV.map((v,i)=>`<tr><th>${i} ${L(ETOK.zh[i],ETOK.en[i])}</th>${v.map(x=>`<td class="${i===k?'hl':''}" style="${i===k?'':'color:var(--muted)'}">${f(x,1)}</td>`).join('')}</tr>`).join('')}</table>`;
  const v=EV[k];
  $('#embOut').innerHTML=`${L('独热向量 × E：第 j 列 = Σ<sub>r</sub> 独热<sub>r</sub> · E<sub>r,j</sub> = 1 · E<sub>'+k+',j</sub> + 0 · （其他行）','one-hot × E: column j = Σ<sub>r</sub> onehot<sub>r</sub> · E<sub>r,j</sub> = 1 · E<sub>'+k+',j</sub> + 0 · (other rows)')}<br>→ <span class="big a">(${v.map(x=>f(x,1)).join(', ')})</span> = E[${k}]`;
  const tab=lg=>{const rep=ESENT[lg].find((x,i,a)=>a.indexOf(x)!==i);return `<table class="mat"><tr><th>${lg==='zh'?'位置':'pos'}</th><th>token</th>${[1,2,3,4].map(j=>`<th>d${j}</th>`).join('')}</tr>${ESENT[lg].map((id,p)=>`<tr><th>${p}</th><th>${ETOK[lg][id]}</th>${EV[id].map(x=>`<td style="${id===rep?'background:var(--act-soft)':''}">${f(x,1)}</td>`).join('')}</tr>`).join('')}</table><div class="mcap">X₀ [6, 4]</div>`};
  $('#embX').innerHTML=`<div class="pair"><div class="zh">${tab('zh')}</div><div class="en">${tab('en')}</div></div>`}
INIT.push(renderEmb);

/* ===== Lab 4.3: RoPE ===== */
regDef('rope',{m:2,n:1,th:30});
function renderRope(){const R=S.rope;
  if(!$('#ropeCtrl').children.length){$('#ropeCtrl').innerHTML=[['m',0,12,1,'m (q)'],['n',0,12,1,'n (k)'],['th',5,90,5,'θ °']].map(([k,a,b,s,lab])=>`<label for="rp-${k}">${lab}</label><input type="range" id="rp-${k}" min="${a}" max="${b}" step="${s}" data-rp="${k}"><output></output>`).join('');
    $$('[data-rp]').forEach(r=>r.oninput=()=>{S.rope[r.dataset.rp]=+r.value;renderRope()});
    $('#ropeShift').onclick=()=>{if(S.rope.m<12&&S.rope.n<12){S.rope.m++;S.rope.n++}renderRope()};$('#ropeReset').onclick=()=>{S.rope=clone(DEFX.rope);renderRope()}}
  $$('[data-rp]').forEach(r=>{r.value=R[r.dataset.rp];r.nextElementSibling.textContent=R[r.dataset.rp]});
  const a=R.m*R.th*Math.PI/180,b=R.n*R.th*Math.PI/180;const q=[Math.cos(a),Math.sin(a)],k=[Math.cos(b),Math.sin(b)];
  const P=(v,r=100)=>[130+v[0]*r,130-v[1]*r];
  $('#ropeSvg').innerHTML=`<circle cx="130" cy="130" r="100" fill="none" style="stroke:var(--line)"/><line x1="20" y1="130" x2="240" y2="130" style="stroke:var(--line)"/><line x1="130" y1="20" x2="130" y2="240" style="stroke:var(--line)"/>
   <line x1="130" y1="130" x2="${P([1,0])[0]}" y2="130" style="stroke:var(--muted)" stroke-dasharray="4 3" stroke-width="2"/>
   <line x1="130" y1="130" x2="${P(q)[0]}" y2="${P(q)[1]}" style="stroke:var(--act)" stroke-width="3"/><text x="${P(q,112)[0]}" y="${P(q,112)[1]}" font-size="13" style="fill:var(--act)">q</text>
   <line x1="130" y1="130" x2="${P(k)[0]}" y2="${P(k)[1]}" style="stroke:var(--par)" stroke-width="3"/><text x="${P(k,112)[0]}" y="${P(k,112)[1]}" font-size="13" style="fill:var(--par)">k</text>
   <text x="236" y="146" font-size="10" class="svgmut" text-anchor="end">${L('旋转前','before')}</text>`;
  const dot=q[0]*k[0]+q[1]*k[1];
  $('#ropeOut').innerHTML=`q ${L('转','rotated')} m·θ = ${R.m*R.th}°, k ${L('转','rotated')} n·θ = ${R.n*R.th}°<br>${L('角度差','difference')} (m−n)·θ = ${(R.m-R.n)*R.th}°<br>q·k = cos(${(R.m-R.n)*R.th}°) = <span class="big">${f(dot,3)}</span><br>${L('点“m+1, n+1”：相对距离不变，点积不变。','Press “m+1, n+1”: same distance, same dot product.')}`;save()}
INIT.push(renderRope);

/* ===== Lab 4.4: residual + norm ===== */
regDef('norm',{x:[2,-1,3,0],u:[0.5,0.5,-1,0]});
function renderNorm(){const N=S.norm;
  if(!$('#normIn').children.length){$('#normIn').innerHTML=`<span class="a">x</span><span>${[0,1,2,3].map(i=>`<input class="nb a" type="number" step="0.5" data-nx="${i}">`).join(' ')}</span><span class="a">f(Norm(x))</span><span>${[0,1,2,3].map(i=>`<input class="nb a" type="number" step="0.5" data-nu="${i}">`).join(' ')}</span>`;
    $$('[data-nx]').forEach(i=>i.oninput=()=>{const v=parseFloat(i.value);if(isFinite(v)){S.norm.x[+i.dataset.nx]=v;renderNorm()}});
    $$('[data-nu]').forEach(i=>i.oninput=()=>{const v=parseFloat(i.value);if(isFinite(v)){S.norm.u[+i.dataset.nu]=v;renderNorm()}});
    $('#normScale').onclick=()=>{S.norm.x=S.norm.x.map(v=>v*10);renderNorm()};$('#normReset').onclick=()=>{S.norm=clone(DEFX.norm);renderNorm()}}
  $$('[data-nx]').forEach(i=>{if(document.activeElement!==i)i.value=N.x[+i.dataset.nx]});$$('[data-nu]').forEach(i=>{if(document.activeElement!==i)i.value=N.u[+i.dataset.nu]});
  const x=N.x,mu=x.reduce((a,b)=>a+b,0)/4,va=x.reduce((a,b)=>a+(b-mu)**2,0)/4,sd=Math.sqrt(va),rms=Math.sqrt(x.reduce((a,b)=>a+b*b,0)/4);
  const v=a=>'('+a.map(z=>f(z,3)).join(', ')+')';
  $('#normOut').innerHTML=`μ = ${f(mu)} &nbsp; σ = ${f(sd)} &nbsp; RMS = ${f(rms)}<br>LayerNorm(x) = ${sd?v(x.map(z=>(z-mu)/sd)):'—'}<br>RMSNorm(x) = ${rms?v(x.map(z=>z/rms)):'—'}<br>x + f = <span class="big a">${v(x.map((z,i)=>z+N.u[i]))}</span>`;save()}
INIT.push(renderNorm);


/* ===== shared attention data ===== */
const AW={Q:[[1,0],[0,1],[1,0],[0,1]],K:[[0,1],[1,0],[0,1],[1,0]],V:[[1,0],[0,1],[0,-1],[1,1]]};
const ATOK=[['小','the'],['猫','cat'],['坐','sat'],['下','down']];
regDef('att',{X:[[1,0,1,0],[0,2,0,1],[1,1,0,0],[0,0,1,1]],step:1,view:'c',mask:true,row:2,speed:1});
const mm2=(A,B)=>A.map(r=>B[0].map((_,j)=>r.reduce((s,v,k)=>s+v*B[k][j],0)));
function attCalc(){const X=S.att.X;const Q=mm2(X,AW.Q),K=mm2(X,AW.K),V=mm2(X,AW.V);
  const Sc=Q.map(q=>K.map(k=>q[0]*k[0]+q[1]*k[1]));const Ss=Sc.map(r=>r.map(v=>v/Math.SQRT2));
  const Sm=Ss.map((r,i)=>r.map((v,j)=>S.att.mask&&j>i?-Infinity:v));
  const A=Sm.map(r=>{const m=Math.max(...r),e=r.map(v=>Math.exp(v-m)),t=e.reduce((a,b)=>a+b,0);return e.map(v=>v/t)});
  const O=mm2(A,V);return {X,Q,K,V,Sc,Ss,Sm,A,O}}
const tl=i=>L(ATOK[i][0],ATOK[i][1]);
function matHTML(M,cap,o={}){const rl=o.rl||M.map((_,i)=>i+1),cl=o.cl||M[0].map((_,j)=>j+1);
  return `<div><div class="mcap" style="${o.par?'color:var(--par)':''}">${cap}</div><table class="mat"><tr><th></th>${cl.map(c=>`<th>${c}</th>`).join('')}</tr>${M.map((r,i)=>`<tr><th>${rl[i]}</th>${r.map((v,j)=>{const masked=o.mask&&o.mask(i,j);const hl=o.hl&&o.hl(i,j);
    const bg=o.heat&&!masked?`background:color-mix(in srgb, var(--act) ${Math.round(v*85)}%, transparent);${v>0.55?'color:var(--bg)':''}`:'';
    return `<td class="${masked?'masked':''} ${hl?'hl':''}" style="${bg}">${o.edit?`<input class="nb a" style="width:3.4em" type="number" step="1" data-ax="${i},${j}" value="${v}">`:masked?'−∞':f(v,o.d??3)}</td>`}).join('')}</tr>`).join('')}</table></div>`}
const ASTEPS=[null,['输入 X 与三个参数矩阵','Input X and the three parameter matrices'],['投影：Q = XW_Q，K = XW_K，V = XW_V','Projections: Q = XW_Q, K = XW_K, V = XW_V'],['分数 S = QKᵀ','Scores S = QKᵀ'],['缩放：S / √d_k（√2 ≈ 1.414）','Scale: S / √d_k (√2 ≈ 1.414)'],['因果掩码','Causal mask'],['逐行 softmax → 注意力权重 A','Row-wise softmax → attention weights A'],['输出 O = AV','Output O = AV']];
let attTimer=null;
function attStop(){if(attTimer){clearInterval(attTimer);attTimer=null}$('#attPlay').innerHTML=L('▶ 自动播放','▶ Play')}
function renderAtt(){const T=S.att,c=attCalc(),r=T.row,st=T.step;
  $$('[data-av]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.av===T.view));$('#attMask').checked=T.mask;$('#attRow').value=r;$('#attSpeed').value=T.speed;
  $('#attStepLbl').textContent=st+'/7';$('#attBack').disabled=st<=1;$('#attNext').disabled=st>=7;
  const rl=ATOK.map((_,i)=>i+1+' '+(S.mode==='en'?ATOK[i][1]:ATOK[i][0]));
  const hlr=(i)=>i===r;
  const maskF=(i,j)=>T.mask&&j>i;
  let n='';const qr=c.Q[r],R=r+1;
  if(st===1)n=LB(`X 的每一行是一个位置的向量（d_model = 4）。W_Q、W_K、W_V 是参数，形状 [4, 2]，对所有位置相同。数值视图中可以编辑 X。`,`Each row of X is one position\'s vector (d_model = 4). W_Q, W_K, W_V are parameters of shape [4, 2], the same for every position. You can edit X in the numerical view.`);
  if(st===2)n=LB(`位置 ${R} 的 q = (${qr.map(v=>f(v)).join(', ')})，k = (${c.K[r].map(v=>f(v)).join(', ')})，v = (${c.V[r].map(v=>f(v)).join(', ')})。三者来自同一行 X、不同的矩阵。`,`Position ${R}: q = (${qr.map(v=>f(v)).join(', ')}), k = (${c.K[r].map(v=>f(v)).join(', ')}), v = (${c.V[r].map(v=>f(v)).join(', ')}). All three come from the same row of X, via different matrices.`);
  if(st===3)n=LB(`第 ${R} 行：q<sub>${R}</sub> 与每个 k 的点积 = (${c.Sc[r].map(v=>f(v)).join(', ')})。分数矩阵 [4, 4] 一次算出所有位置对。`,`Row ${R}: q<sub>${R}</sub> dotted with every k = (${c.Sc[r].map(v=>f(v)).join(', ')}). The [4, 4] score matrix covers every pair in one multiplication.`);
  if(st===4)n=LB(`除以 √2：第 ${R} 行变成 (${c.Ss[r].map(v=>f(v)).join(', ')})。d_k 很大时这一步防止 softmax 过于极端。`,`Divide by √2: row ${R} becomes (${c.Ss[r].map(v=>f(v)).join(', ')}). With large d_k this keeps softmax from becoming extreme.`);
  if(st===5)n=T.mask?LB(`掩码把 j > i 的分数变成 −∞。位置 ${R} 只能看到位置 1–${R}。`,`The mask turns scores with j > i into −∞. Position ${R} can see only positions 1–${R}.`):LB(`掩码已关闭：所有位置都能看到“未来”。打开掩码比较第 1 行。`,`Mask is off: every position can see the “future”. Turn it on and compare row 1.`);
  if(st===6)n=LB(`softmax 后第 ${R} 行 = (${c.A[r].map(v=>f(v)).join(', ')})，和为 1。${T.mask&&r<3?'被掩码的位置恰好为 0。':''}${!T.mask&&r===0?' 位置 1 把大部分注意力给了位置 2（未来）。':''}`,`After softmax, row ${R} = (${c.A[r].map(v=>f(v)).join(', ')}), summing to 1.${T.mask&&r<3?' Masked positions are exactly 0.':''}${!T.mask&&r===0?' Position 1 gives most of its attention to position 2 (the future).':''}`);
  if(st===7)n=LB(`o<sub>${R}</sub> = Σ<sub>j</sub> A<sub>${R},j</sub> v<sub>j</sub> = (${c.O[r].map(v=>f(v)).join(', ')})：一个新的混合向量，不等于任何单个 v<sub>j</sub>。`,`o<sub>${R}</sub> = Σ<sub>j</sub> A<sub>${R},j</sub> v<sub>j</sub> = (${c.O[r].map(v=>f(v)).join(', ')}): a new mixed vector, equal to no single v<sub>j</sub>.`);
  $('#attNarr').innerHTML=`<b>${L(ASTEPS[st][0],ASTEPS[st][1])}</b>${n}`;
  let h='';
  if(T.view==='n'){
    const parts=[];
    if(st>=1)parts.push(`<div class="lab-row">${matHTML(c.X,'X [4, 4]',{rl,edit:st===1,hl:(i)=>hlr(i)})}${matHTML(AW.Q,'W_Q [4, 2]',{par:1,d:0})}${matHTML(AW.K,'W_K [4, 2]',{par:1,d:0})}${matHTML(AW.V,'W_V [4, 2]',{par:1,d:0})}</div>`);
    if(st>=2)parts.push(`<div class="lab-row">${matHTML(c.Q,'Q [4, 2]',{rl,hl:i=>hlr(i)})}${matHTML(c.K,'K [4, 2]',{rl})}${matHTML(c.V,'V [4, 2]',{rl})}</div>`);
    const sc=st>=5?c.Sm:st>=4?c.Ss:c.Sc;
    if(st>=3&&st<6)parts.push(matHTML(sc,(st===3?'S = QKᵀ':st===4?'S / √2':'S / √2 + M')+' [4, 4]',{rl,cl:[1,2,3,4],hl:i=>hlr(i),mask:st>=5?maskF:null}));
    if(st>=6)parts.push(`<div class="lab-row">${matHTML(c.A,'A = softmax [4, 4]',{rl,cl:[1,2,3,4],heat:1,hl:i=>hlr(i),mask:null})}${st>=7?matHTML(c.O,'O = AV [4, 2]',{rl,hl:i=>hlr(i)}):''}</div>`);
    h=parts.join('<div style="height:10px"></div>');
  }else{
    const toks=ATOK.map((_,i)=>`<span class="tok ${i===r?'cur':''}">${tl(i)}<small>${i+1}</small></span>`).join('');
    let body='';
    if(st<=2)body=LB(`每个位置都由同一个向量算出三份描述：<b>q</b>（找什么）、<b>k</b>（能被如何匹配）、<b>v</b>（交出什么）。三个参数矩阵决定这种“翻译”，对所有位置相同。`,`Every position computes three descriptions from the same vector: <b>q</b> (what it looks for), <b>k</b> (how it can be matched), <b>v</b> (what it hands over). Three parameter matrices define this “translation”, the same for every position.`);
    else if(st<6){const row=(st>=5?c.Sm:st>=4?c.Ss:c.Sc)[r];const mx=Math.max(...row.filter(isFinite).map(Math.abs),1);
      body=`<div class="mcap">${L('位置 '+(r+1)+' 对各位置的分数','position '+(r+1)+'\'s scores')}</div>`+row.map((v,j)=>`<div style="display:grid;grid-template-columns:5em 1fr 4em;gap:8px;align-items:center;font-size:13px"><span>${tl(j)}</span><div style="background:var(--bg);height:14px;border-radius:3px">${isFinite(v)?`<div style="width:${Math.abs(v)/mx*100}%;height:100%;background:${v>=0?'var(--pos)':'var(--neg)'};border-radius:3px"></div>`:''}</div><span class="mono">${isFinite(v)?f(v,2):'−∞'}</span></div>`).join('');}
    else{body=`<div class="mcap">${L('注意力权重（行 = 查询位置，列 = 被看的位置）','attention weights (row = querying position, column = attended position)')}</div>`+matHTML(c.A,'',{rl,cl:ATOK.map((_,i)=>i+1),heat:1,hl:i=>hlr(i),d:2});
      if(st>=7)body+=`<div class="mcap" style="margin-top:8px">o<sub>${r+1}</sub> = ${c.A[r].map((a,j)=>a>0.0005?`${f(a,2)}·v<sub>${j+1}</sub>`:'').filter(Boolean).join(' + ')} = (${c.O[r].map(v=>f(v,2)).join(', ')})</div>`}
    h=`<div class="tokrow" style="margin-bottom:10px">${toks}</div>${body}`}
  $('#attBody').innerHTML=h;
  $$('[data-ax]').forEach(inp=>inp.onchange=()=>{const v=parseFloat(inp.value);if(!isFinite(v))return;const [i,j]=inp.dataset.ax.split(',').map(Number);S.att.X[i][j]=v;renderAtt()});
  renderQKV();save()}
function renderQKV(){const c=attCalc(),rl=ATOK.map((_,i)=>i+1);
  $('#qkvMats').innerHTML=matHTML(c.X,'X [4, 4]',{rl,d:2})+matHTML(AW.Q,'W_Q',{par:1,d:0})+matHTML(AW.K,'W_K',{par:1,d:0})+matHTML(AW.V,'W_V',{par:1,d:0})+matHTML(c.Q,'Q',{rl})+matHTML(c.K,'K',{rl})+matHTML(c.V,'V',{rl})}
INIT.push(()=>{
  $$('[data-av]').forEach(b=>b.onclick=()=>{S.att.view=b.dataset.av;renderAtt()});
  $('#attMask').onchange=e=>{S.att.mask=e.target.checked;renderAtt()};$('#attRow').onchange=e=>{S.att.row=+e.target.value;renderAtt()};
  $('#attSpeed').onchange=e=>{S.att.speed=+e.target.value;if(attTimer){attStop();$('#attPlay').click()}save()};
  $('#attReset').onclick=()=>{attStop();S.att.step=1;S.att.X=clone(DEFX.att.X);renderAtt()};
  $('#attBack').onclick=()=>{attStop();S.att.step=Math.max(1,S.att.step-1);renderAtt()};
  $('#attNext').onclick=()=>{attStop();S.att.step=Math.min(7,S.att.step+1);renderAtt()};
  $('#attPlay').onclick=()=>{if(attTimer){attStop();return}if(S.att.step>=7)S.att.step=1;renderAtt();
    attTimer=setInterval(()=>{if(S.att.step>=7){attStop();return}S.att.step++;renderAtt();if(S.att.step>=7)attStop()},1600/S.att.speed);$('#attPlay').innerHTML=L('⏸ 暂停','⏸ Pause')};
  $$('[data-attgo]').forEach(b=>b.onclick=()=>{attStop();S.att.step=+b.dataset.attgo;renderAtt();go('labAtt')});
  attStop();renderAtt()});
REDRAW.push(()=>{if($('#attBody'))renderAtt()});

/* ===== multi-head shapes ===== */
const MHP={gpt2:['GPT-2 small',768,12,12],l27:['Llama 2 7B',4096,32,32],l38:['Llama 3.1 8B',4096,32,8],l370:['Llama 3.1 70B',8192,64,8]};
regDef('mh',{n:10,d:768,h:12,kv:12});
function renderMH(){const M=S.mh;
  if(!$('#mhCtrl').children.length){$('#mhCtrl').innerHTML=[['n','n'],['d','d_model'],['h',L('头数','heads')],['kv',L('KV 头数','KV heads')]].map(([k,l])=>`<label for="mh-${k}">${l}</label><input class="nb" type="number" min="1" id="mh-${k}" data-mh="${k}" style="width:6em">`).join('');
    $$('[data-mh]').forEach(i=>i.oninput=()=>{const v=parseInt(i.value);if(v>0){S.mh[i.dataset.mh]=v;renderMH()}});
    $('#mhPresets').innerHTML=Object.entries(MHP).map(([k,p])=>`<button class="btn" data-mhp="${k}">${p[0]}</button>`).join('');
    $$('[data-mhp]').forEach(b=>b.onclick=()=>{const p=MHP[b.dataset.mhp];Object.assign(S.mh,{d:p[1],h:p[2],kv:p[3]});renderMH()})}
  $$('[data-mh]').forEach(i=>{if(document.activeElement!==i)i.value=M[i.dataset.mh]});
  if(M.d%M.h||M.h%M.kv){$('#mhTable').innerHTML=`<tr><td>${L('头数必须整除 d_model，且能被 KV 头数整除。','Heads must divide d_model and be divisible by KV heads.')}</td></tr>`;return}
  const dh=M.d/M.h,kvd=M.kv*dh,n=M.n;const N=a=>a.reduce((x,y)=>x*y,1).toLocaleString();
  const rows=[['X',`[${n}, ${M.d}]`,N([n,M.d]),'a'],['W_Q',`[${M.d}, ${M.d}]`,N([M.d,M.d]),'p'],['W_K, W_V',`2 × [${M.d}, ${kvd}]`,N([2,M.d,kvd]),'p'],
    ['Q → '+L('按头重排','per head'),`[${M.h}, ${n}, ${dh}]`,N([M.h,n,dh]),'a'],['K, V',`2 × [${M.kv}, ${n}, ${dh}]`,N([2,M.kv,n,dh]),'a'],
    [L('分数 / 权重','scores / weights'),`[${M.h}, ${n}, ${n}]`,N([M.h,n,n]),'a'],[L('各头输出','head outputs'),`[${M.h}, ${n}, ${dh}]`,N([M.h,n,dh]),'a'],
    [L('拼接','concat'),`[${n}, ${M.d}]`,N([n,M.d]),'a'],['W_O',`[${M.d}, ${M.d}]`,N([M.d,M.d]),'p'],[L('输出（加回残差流）','output (added to residual)'),`[${n}, ${M.d}]`,N([n,M.d]),'a']];
  $('#mhTable').innerHTML=`<tr><th></th><th>${L('形状','shape')}</th><th>${L('数字个数','numbers')}</th><th></th></tr>`+rows.map(([a,b,c,t])=>`<tr><td>${a}</td><td class="mono">${b}</td><td class="num">${c}</td><td class="${t}">${t==='p'?L('参数','parameter'):L('激活值','activation')}</td></tr>`).join('')+
   `<tr><td colspan="4">d_head = ${M.d}/${M.h} = <b>${dh}</b>${M.kv<M.h?' · '+L(`每 ${M.h/M.kv} 个查询头共享一组 K/V（GQA）`,`${M.h/M.kv} query heads share each K/V head (GQA)`):''}</td></tr>`;save()}
INIT.push(renderMH);

/* ===== block flow ===== */
const BCFG={gpt2:{d:768,h:12,ff:3072,norm:'LayerNorm',act:'GELU',gated:0},l27:{d:4096,h:32,ff:11008,norm:'RMSNorm',act:'SiLU · SwiGLU',gated:1}};
regDef('blk',{m:'gpt2',n:10,sel:3});
function renderBlk(){const B=S.blk,c=BCFG[B.m],n=B.n,dh=c.d/c.h;$('#blkModel').value=B.m;if(document.activeElement!==$('#blkN'))$('#blkN').value=n;
  const st=[
   ['x',`[${n}, ${c.d}]`,0,'c44',['残差流输入：上一块的输出（或嵌入）。','Residual-stream input: the previous block\'s output (or the embeddings).']],
   [c.norm+' ₁',`[${n}, ${c.d}]`,1,'c44',['逐位置归一化，只作用于送进注意力的副本。','Per-position normalization, applied only to the copy fed into attention.']],
   ['Q, K, V',`3 × [${c.h}, ${n}, ${dh}]`,1,'c52',[`三个投影${c.gated?'，随后对 Q、K 应用 RoPE':''}。`,`Three projections${c.gated?', then RoPE applied to Q and K':''}.`]],
   [L('分数→掩码→softmax','scores→mask→softmax'),`[${c.h}, ${n}, ${n}]`,0,'c53',['每个头一张 n×n 权重表。无参数。','One n×n weight table per head. No parameters.']],
   ['A·V',`[${c.h}, ${n}, ${dh}]`,0,'c54',['每个位置得到可见位置值向量的加权混合。','Each position gets a weighted mixture of visible values.']],
   [L('拼接 · W_O','concat · W_O'),`[${n}, ${c.d}]`,1,'c55',['各头拼接后由 W_O 混合，回到 d_model。','Heads concatenated and mixed by W_O back to d_model.']],
   ['+ x',`[${n}, ${c.d}]`,0,'c44',['第一次残差相加。','First residual addition.']],
   [c.norm+' ₂',`[${n}, ${c.d}]`,1,'c44',['再次归一化，送进 MLP。','Normalize again for the MLP.']],
   [L('MLP 扩宽','MLP up'),`${c.gated?'2 × ':''}[${n}, ${c.ff}]`,1,'s5',[c.gated?'两个并行投影（门控投影与上投影）。':'扩宽到 d_ff。',c.gated?'Two parallel projections (gate and up).':'Widen to d_ff.']],
   [c.act,`[${n}, ${c.ff}]`,0,'s5',[c.gated?'SiLU(gate) ⊙ up：逐元素。':'逐元素非线性。',c.gated?'SiLU(gate) ⊙ up: element-wise.':'Element-wise nonlinearity.']],
   [L('MLP 投影回来','MLP down'),`[${n}, ${c.d}]`,1,'s5',['投影回 d_model。','Project back to d_model.']],
   ['+ x',`[${n}, ${c.d}]`,0,'c44',['第二次残差相加；输出交给下一个块，形状与输入相同。','Second residual addition; the output goes to the next block with the same shape as the input.']]];
  $('#blkFlow').innerHTML=st.map((s,i)=>`<button class="fbox ${s[2]?'par':''} ${i===B.sel?'on':''}" data-bs="${i}">${s[0]}<small>${s[1]}</small></button>${i<st.length-1?'<span class="farrow">→</span>':''}`).join('');
  $$('[data-bs]').forEach(b=>b.onclick=()=>{S.blk.sel=+b.dataset.bs;renderBlk()});
  const s=st[B.sel];$('#blkInfo').innerHTML=`<b>${s[0]}</b> <span class="mono">${s[1]}</span> · ${s[2]?`<span class="p">${L('使用参数','uses parameters')}</span>`:L('无参数','no parameters')}${LB(s[4][0],s[4][1])}<a href="#${s[3]}">${L('回到讲解','Back to the explanation')} →</a>`;save()}
INIT.push(()=>{$('#blkModel').onchange=e=>{S.blk.m=e.target.value;renderBlk()};$('#blkN').oninput=e=>{const v=parseInt(e.target.value);if(v>0){S.blk.n=v;renderBlk()}};renderBlk()});


const smv=(z,T=1)=>{const s=z.map(v=>v/T),m=Math.max(...s),e=s.map(v=>Math.exp(v-m)),t=e.reduce((a,b)=>a+b,0);return e.map(v=>v/t)};
const barRow=(lab,v,col,extra='')=>`<div style="display:grid;grid-template-columns:5.5em 1fr 3.6em;gap:8px;align-items:center;font-size:13px;margin:2px 0"><span>${lab}</span><div style="background:var(--bg);height:15px;border-radius:3px;position:relative">${extra}<div style="position:absolute;inset:0 auto 0 0;width:${Math.max(0,Math.min(1,v))*100}%;background:${col};border-radius:3px"></div></div><span class="mono">${f(v,3)}</span></div>`;

/* ===== Lab 6.2: logits and loss ===== */
const LT=[['猫','cat'],['狗','dog'],['垫子','mat'],['跑','ran'],['的','of']];
regDef('loss',{z:[2,1,0,-1,0.5],t:2});
function renderLoss(){const S2=S.loss;
  if(!$('#lossCtrl').children.length){$('#lossCtrl').innerHTML=LT.map((t,i)=>`<label for="lz${i}" style="cursor:pointer" data-lt="${i}">z<sub>${i+1}</sub> ${L(t[0],t[1])}</label><input type="range" id="lz${i}" min="-4" max="6" step="0.25" data-lz="${i}"><output></output>`).join('');
    $$('[data-lz]').forEach(r=>r.oninput=()=>{S.loss.z[+r.dataset.lz]=+r.value;renderLoss()});$$('[data-lt]').forEach(l=>l.onclick=e=>{e.preventDefault();S.loss.t=+l.dataset.lt;renderLoss()});
    $('#lossReset').onclick=()=>{S.loss=clone(DEFX.loss);renderLoss()}}
  $$('[data-lz]').forEach(r=>{r.value=S2.z[+r.dataset.lz];r.nextElementSibling.textContent=f(S2.z[+r.dataset.lz],2)});
  $$('[data-lt]').forEach(l=>l.style.fontWeight=+l.dataset.lt===S2.t?'700':'400');
  const p=smv(S2.z),loss=-Math.log(p[S2.t]);
  $('#lossBars').innerHTML=LT.map((t,i)=>barRow((i===S2.t?'★ ':'')+L(t[0],t[1]),p[i],i===S2.t?'var(--pos)':'var(--act)')).join('');
  $('#lossOut').innerHTML=`${L('目标','target')}: <b>${L(LT[S2.t][0],LT[S2.t][1])}</b> · p<sub>t</sub> = ${f(p[S2.t],3)}<br>ℒ = −log ${f(p[S2.t],3)} = <span class="big">${f(loss,3)}</span><br>${L('参照：均匀猜测 log 5','reference: uniform guess log 5')} = ${f(Math.log(5),3)}`;save()}
INIT.push(renderLoss);

/* ===== Lab 6.3: gradient step ===== */
regDef('gd',{W:[[0.5,0,-0.5],[0,0.25,0]],lr:0.5,hist:[]});
const GH=[1,2],GT=1;
function gdState(W){const z=[0,1,2].map(k=>GH[0]*W[0][k]+GH[1]*W[1][k]);const p=smv(z);const g=p.map((v,k)=>v-(k===GT?1:0));return {z,p,g,loss:-Math.log(p[GT])}}
function renderGD(){const G2=S.gd,s=gdState(G2.W);$('#gdLr').value=G2.lr;$('#gdLrO').textContent=f(G2.lr,2);
  const gW=[0,1].map(i=>s.g.map(v=>GH[i]*v));
  $('#gdBody').innerHTML=matHTML(G2.W,'W [2, 3]',{par:1,rl:['h₁=1','h₂=2'],cl:['t1','t2★','t3']})+matHTML([s.z],'z = hW',{rl:[''],cl:['t1','t2','t3']})+matHTML([s.p],'p = softmax(z)',{rl:[''],cl:['t1','t2','t3']})+matHTML([s.g],'p − y',{rl:[''],cl:['t1','t2','t3']})+matHTML(gW,'∂ℒ/∂W = hᵢ(p−y)',{rl:['h₁','h₂'],cl:['t1','t2','t3']});
  const hist=G2.hist.concat([s.loss]);
  $('#gdOut').innerHTML=`ℒ = −log p<sub>t2</sub> = <span class="big">${f(s.loss,3)}</span><br>${L('损失历史','loss history')}: ${hist.map(v=>f(v,3)).join(' → ')}`+(hist.length>2&&hist[hist.length-1]>hist[hist.length-2]?`<br><b class="bad">${L('损失上升了：学习率可能太大，步子越过了最低点。','The loss went up: the learning rate may be too large, overshooting.')}</b>`:'');save()}
INIT.push(()=>{$('#gdLr').oninput=e=>{S.gd.lr=+e.target.value;renderGD()};
  $('#gdStep').onclick=()=>{const s=gdState(S.gd.W);S.gd.hist.push(s.loss);S.gd.W=S.gd.W.map((r,i)=>r.map((w,k)=>w-S.gd.lr*GH[i]*s.g[k]));renderGD()};
  $('#gdReset').onclick=()=>{S.gd=clone(DEFX.gd);renderGD()};renderGD()});

/* ===== Lab 6.5: training vs inference ===== */
regDef('ti',{m:'train',step:0,speed:1});
const TIK={zh:['猫','坐','在','垫子','上','。'],en:['the','␣cat','␣sat','␣on','␣the','␣mat']};
const TISTEPS={train:[['整段已知文本作为输入（6 个 token）。参数处于可更新状态。','The whole known text is the input (6 tokens). Parameters are open for updating.'],
 ['一次前向计算：因果掩码下，5 个位置同时给出“下一个 token”的预测。','One forward pass: under the causal mask, 5 positions predict their next token at the same time.'],
 ['与目标（右移一位的文本）比较，得到 5 个损失并取平均。','Compare with the targets (the text shifted by one) to get 5 losses, averaged.'],
 ['反向传播：计算每个参数的梯度。','Backpropagation: compute every parameter\'s gradient.'],
 ['优化器更新参数。下一批数据会用到更新后的参数。','The optimizer updates parameters. The next batch uses the updated parameters.']],
 infer:[['提示（3 个 token）作为输入。参数只读。','The prompt (3 tokens) is the input. Parameters are read-only.'],
 ['前向计算 #1：处理全部 3 个提示位置，最后位置给出分布，采样得到“垫子”。','Forward pass #1: process all 3 prompt positions; the last gives a distribution; sample “␣on”.'],
 ['把“垫子”追加到输入。前向计算 #2：只处理这个新位置（借助 KV 缓存），采样得到“上”。','Append “␣on”. Forward pass #2: process only this new position (thanks to the KV cache); sample “␣the”.'],
 ['追加“上”。前向计算 #3：采样得到“。”。','Append “␣the”. Forward pass #3: sample “␣mat”.'],
 ['追加“。”。前向计算 #4：采样得到结束 token，停止。参数从头到尾没有改变。','Append “␣mat”. Forward pass #4: sample the end token and stop. Parameters never changed.']]};
let tiTimer=null;
function tiStop(){if(tiTimer){clearInterval(tiTimer);tiTimer=null}$('#tiPlay').innerHTML=L('▶ 自动播放','▶ Play')}
function renderTI(){const T=S.ti,st=T.step,tr=T.m==='train';$$('[data-tim]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.tim===T.m));$('#tiSpeed').value=T.speed;
  let toks,passes,param;
  const row=fn=>`<div class="pair"><div class="zh"><div class="tokrow">${fn('zh')}</div></div><div class="en"><div class="tokrow">${fn('en')}</div></div></div>`;
  if(tr){toks=row(lg=>TIK[lg].map((t,i)=>{const pred=st>=1&&i<5,cmp=st>=2&&i<5;return `<span class="tok">${t}<small>${pred?'→ '+TIK[lg][i+1]+(cmp?' ✓':''):'&nbsp;'}</small></span>`}).join(''));
    passes=st>=1?1:0;param=st>=4?['已更新','updated','var(--par)']:st>=3?['已算出梯度','gradients computed','var(--par)']:['可训练','trainable','var(--par)'];}
  else{const n=3+st;toks=row(lg=>TIK[lg].slice(0,Math.min(6,n)).map((t,i)=>`<span class="tok ${i>=3?'gen':''} ${st>=1&&i===Math.min(6,n)-1?'cur':''}">${t}<small>${i>=3?(lg==='zh'?'生成':'generated'):(lg==='zh'?'提示':'prompt')}</small></span>`).join('')+(st>=4?`<span class="tok gen">&lt;eos&gt;</span>`:''));
    passes=st;param=['只读','read-only','var(--muted)'];}
  $('#tiBody').innerHTML=`${toks}<div class="controls mono" style="font-size:13px"><span>${L('前向计算次数','forward passes')}: <b>${passes}</b></span><span>${L('参数','parameters')}: <b style="color:${param[2]}">${L(param[0],param[1])}</b></span><span>${L('步骤','step')} ${st+1}/5</span></div>`;
  const s=TISTEPS[T.m][st];$('#tiNarr').innerHTML=LB(s[0],s[1]);$('#tiBack').disabled=st===0;$('#tiNext').disabled=st===4;save()}
INIT.push(()=>{$$('[data-tim]').forEach(b=>b.onclick=()=>{tiStop();S.ti.m=b.dataset.tim;S.ti.step=0;renderTI()});
  $('#tiReset').onclick=()=>{tiStop();S.ti.step=0;renderTI()};$('#tiBack').onclick=()=>{tiStop();S.ti.step=Math.max(0,S.ti.step-1);renderTI()};$('#tiNext').onclick=()=>{tiStop();S.ti.step=Math.min(4,S.ti.step+1);renderTI()};
  $('#tiSpeed').onchange=e=>{S.ti.speed=+e.target.value;save()};
  $('#tiPlay').onclick=()=>{if(tiTimer){tiStop();return}if(S.ti.step>=4)S.ti.step=0;renderTI();tiTimer=setInterval(()=>{if(S.ti.step>=4){tiStop();return}S.ti.step++;renderTI();if(S.ti.step>=4)tiStop()},1500/S.ti.speed);$('#tiPlay').innerHTML=L('⏸ 暂停','⏸ Pause')};
  tiStop();renderTI()});

/* ===== Lab 6.6: sampling ===== */
const SPT=[['好','good'],['热','hot'],['冷','cold'],['晴朗','sunny'],['糟糕','bad'],['奇怪','strange'],['紫色','purple'],['香蕉','banana']],SPZ=[3.0,2.5,2.2,1.8,1.0,0.2,-1.0,-2.0];
regDef('sp',{T:1,k:8,p:1,counts:[0,0,0,0,0,0,0,0],last:null,seed:12345});
function spDist(){const P=S.sp;let p=smv(SPZ,P.T);const idx=p.map((v,i)=>i).sort((a,b)=>p[b]-p[a]);const keep=new Set(idx.slice(0,P.k));
  let c=0;const keep2=new Set();for(const i of idx){if(!keep.has(i))continue;keep2.add(i);c+=p[i];if(c>=P.p-1e-12)break}
  const q=p.map((v,i)=>keep2.has(i)?v:0),t=q.reduce((a,b)=>a+b,0);return q.map(v=>v/t)}
function spRand(){S.sp.seed=(S.sp.seed*1103515245+12345)%2147483648;return S.sp.seed/2147483648}
function spDraw(){const q=spDist();let r=spRand(),i=0;for(;i<q.length-1;i++){r-=q[i];if(r<0)break}return i}
function renderSP(){const P=S.sp;
  if(!$('#spCtrl').children.length){$('#spCtrl').innerHTML=`<label for="spT">T</label><input type="range" id="spT" min="0.05" max="3" step="0.05"><output></output><label for="spK">top-k</label><input type="range" id="spK" min="1" max="8" step="1"><output></output><label for="spP">top-p</label><input type="range" id="spP" min="0.05" max="1" step="0.01"><output></output>`;
    $('#spT').oninput=e=>{S.sp.T=+e.target.value;S.sp.counts=S.sp.counts.map(()=>0);renderSP()};$('#spK').oninput=e=>{S.sp.k=+e.target.value;S.sp.counts=S.sp.counts.map(()=>0);renderSP()};$('#spP').oninput=e=>{S.sp.p=+e.target.value;S.sp.counts=S.sp.counts.map(()=>0);renderSP()};
    $('#sp1').onclick=()=>{const i=spDraw();S.sp.counts[i]++;S.sp.last=i;renderSP()};$('#sp200').onclick=()=>{for(let n=0;n<200;n++)S.sp.counts[spDraw()]++;S.sp.last=null;renderSP()};$('#spReset').onclick=()=>{S.sp=clone(DEFX.sp);renderSP()}}
  [['spT',P.T],['spK',P.k],['spP',P.p]].forEach(([id,v])=>{$('#'+id).value=v;$('#'+id).nextElementSibling.textContent=f(v,2)});
  const p0=smv(SPZ),q=spDist(),tot=P.counts.reduce((a,b)=>a+b,0);
  $('#spBars').innerHTML=SPT.map((t,i)=>`<div style="display:grid;grid-template-columns:5em 1fr 3.4em 3em;gap:8px;align-items:center;font-size:13px;margin:2px 0"><span>${L(t[0],t[1])}</span><div style="position:relative;height:16px;background:var(--bg);border-radius:3px"><div style="position:absolute;left:0;top:0;bottom:8px;width:${p0[i]*100}%;background:var(--line)"></div><div style="position:absolute;left:0;top:8px;bottom:0;width:${q[i]*100}%;background:var(--act)"></div></div><span class="mono">${f(q[i],3)}</span><span class="mono" style="color:var(--muted)">${tot?P.counts[i]:''}</span></div>`).join('');
  const kept=q.filter(v=>v>0).length;
  $('#spOut').innerHTML=`${L('保留候选数','candidates kept')}: ${kept}/8${tot?` · ${L('累计抽样','samples drawn')}: ${tot}`:''}${P.last!=null?`<br>${L('这次抽到','This draw')}: <span class="big a">${L(SPT[P.last][0],SPT[P.last][1])}</span>`:''}`;save()}
INIT.push(renderSP);


const GIB=2**30;
/* ===== Lab 7.1: bandwidth vs compute ===== */
const GPUS={a100:['A100 80GB SXM',2.0e12,312e12,80],h100:['H100 SXM',3.35e12,989e12,80],r4090:['RTX 4090',1.0e12,165e12,24]};
regDef('bw',{g:'a100',P:6.74,b:2,B:1});
function renderBW(){const W=S.bw;
  if(!$('#bwCtrl').children.length){$('#bwCtrl').innerHTML=`<label>GPU</label><select id="bwG" class="btn">${Object.entries(GPUS).map(([k,g])=>`<option value="${k}">${g[0]}</option>`).join('')}</select>
   <label for="bwP">${L('参数量（十亿）','parameters (billions)')}</label><input class="nb" id="bwP" type="number" step="0.1" min="0.1" style="width:6em">
   <label>${L('每参数字节','bytes per parameter')}</label><select id="bwB" class="btn"><option value="2">BF16 · 2</option><option value="1">INT8/FP8 · 1</option><option value="0.5625">INT4 · ~0.56</option></select>
   <label for="bwBatch">${L('批量（并发请求）','batch (concurrent requests)')}</label><input type="range" id="bwBatch" min="1" max="256" step="1">`;
    $('#bwG').onchange=e=>{S.bw.g=e.target.value;renderBW()};$('#bwP').oninput=e=>{const v=parseFloat(e.target.value);if(v>0){S.bw.P=v;renderBW()}};$('#bwB').onchange=e=>{S.bw.b=+e.target.value;renderBW()};$('#bwBatch').oninput=e=>{S.bw.B=+e.target.value;renderBW()}}
  const g=GPUS[W.g];$('#bwG').value=W.g;if(document.activeElement!==$('#bwP'))$('#bwP').value=W.P;$('#bwB').value=W.b;$('#bwBatch').value=W.B;
  const bytes=W.P*1e9*W.b,tm=bytes/g[1],tc=2*W.P*1e9*W.B/g[2],step=Math.max(tm,tc),mb=tm>=tc;
  $('#bwOut').innerHTML=`${L('权重','weights')}: ${f(bytes/1e9,2)} GB ${bytes/1e9>g[3]?`<b class="bad">${L('（超出 '+g[3]+' GB 显存！）','(exceeds '+g[3]+' GB of memory!)')}</b>`:''}<br>
   ${L('每个解码步读权重','weight read per decode step')}: ${f(tm*1000,2)} ms · ${L('计算','compute')} (2N×B): ${f(tc*1000,3)} ms<br>
   ${L('瓶颈','bottleneck')}: <b class="${mb?'bad':'ok'}">${mb?L('访存受限','memory-bound'):L('计算受限','compute-bound')}</b> · ${L('算术强度约','arithmetic intensity ≈')} ${f(2*W.B/W.b,1)} ${L('次/字节，硬件平衡点约','FLOP/byte; hardware balance ≈')} ${f(g[2]/g[1],0)}<br>
   ${L('每个请求的速度上限','per-request ceiling')}: <span class="big">${f(1/step,0)}</span> tok/s · ${L('总吞吐上限','total throughput ceiling')}: <span class="big">${f(W.B/step,0)}</span> tok/s`;save()}
INIT.push(renderBW);

/* ===== Lab 7.2: quantization ===== */
const QW=[0.12,-0.40,0.33,0.05,-0.08,0.27,-0.19,0.01];
regDef('qz',{bits:4,out:false});
function renderQZ(){const Z=S.qz;$('#qBits').value=Z.bits;$('#qOut').checked=Z.out;
  const w=QW.slice();if(Z.out)w[3]=2.0;const m=Math.max(...w.map(Math.abs)),qm=2**(Z.bits-1)-1,s=m/qm;
  const q=w.map(v=>Math.round(v/s)),r=q.map(v=>v*s),e=w.map((v,i)=>Math.abs(v-r[i]));
  $('#qTable').innerHTML=`<tr><th></th>${w.map((_,i)=>`<th>w${i+1}</th>`).join('')}</tr><tr><td>${L('原始','original')}</td>${w.map(v=>`<td>${f(v,3)}</td>`).join('')}</tr><tr><td>${L('存储的整数','stored int')}</td>${q.map(v=>`<td class="p">${v}</td>`).join('')}</tr><tr><td>${L('还原','restored')}</td>${r.map(v=>`<td>${f(v,3)}</td>`).join('')}</tr><tr><td>${L('误差','error')}</td>${e.map(v=>`<td style="color:${v>0.05?'var(--neg)':'var(--muted)'}">${f(v,3)}</td>`).join('')}</tr>`;
  $('#qRes').innerHTML=`${L('整数范围','integer range')} −${qm}…${qm} · s = ${f(m,3)}/${qm} = ${f(s,4)}<br>${L('平均误差','mean error')}: <span class="big">${f(e.reduce((a,b)=>a+b,0)/8,4)}</span> · ${L('最大误差','max error')}: ${f(Math.max(...e),3)}<br>${L('存储','storage')}: 8 × ${Z.bits} ${L('位 + 一个缩放因子','bits + one scale')} (${L('原 BF16：','BF16 was ')}8 × 16 ${L('位','bits')})`;save()}
INIT.push(()=>{$('#qBits').onchange=e=>{S.qz.bits=+e.target.value;renderQZ()};$('#qOut').onchange=e=>{S.qz.out=e.target.checked;renderQZ()};renderQZ()});

/* ===== Lab 7.4: prefill / decode ===== */
regDef('pd',{P:6,G:5,noCache:false,step:0,speed:1});
let pdTimer=null;
function pdStop(){if(pdTimer){clearInterval(pdTimer);pdTimer=null}$('#pdPlay').innerHTML=L('▶ 自动播放','▶ Play')}
function pdPasses(){const D=S.pd,out=[];for(let k=1;k<=D.G;k++){const proc=k===1?D.P:(D.noCache?D.P+k-1:1);out.push({proc,t:1+0.15*proc,ctx:D.P+k-1})}return out}
function renderPD(){const D=S.pd,ps=pdPasses(),st=Math.min(D.step,ps.length);
  $('#pdP').value=D.P;$('#pdPO').textContent=D.P;$('#pdG').value=D.G;$('#pdGO').textContent=D.G;$('#pdNoCache').checked=D.noCache;$('#pdSpeed').value=D.speed;
  $('#pdBack').disabled=st===0;$('#pdStep').disabled=st>=ps.length;
  const gen=st;const toks=Array.from({length:D.P},(_,i)=>`<span class="tok">p${i+1}<small>${L('提示','prompt')}</small></span>`).join('')+Array.from({length:gen},(_,i)=>`<span class="tok gen ${i===gen-1?'cur':''}">g${i+1}<small>${L('生成','generated')}</small></span>`).join('');
  const kvN=st===0?0:(D.noCache?0:D.P+st-1);
  const lastProc=st?ps[st-1].proc:0;
  const kvRow=l=>`<div style="display:flex;gap:8px;align-items:center;font-size:12.5px"><span class="mono" style="width:5.5em;color:var(--muted)">${L('第 '+l+' 层','layer '+l)}</span><div class="kv">${D.noCache?`<span style="color:var(--muted)">${st?L('（不缓存：本步重新计算了 '+lastProc+' 个位置的 K、V，算完即丢弃）','(no cache: this step recomputed K, V for '+lastProc+' positions, then discarded them)'):''}</span>`:Array.from({length:kvN},(_,i)=>`<i class="${(st===1&&i<D.P)||(st>1&&i===kvN-1)?'new':''}" title="${i<D.P?'p'+(i+1):'g'+(i-D.P+1)}"></i>`).join('')}</div></div>`;
  const tot=ps.reduce((a,b)=>a+b.t,0);
  const tl=ps.map((p,i)=>`<div title="${p.proc}" style="width:${p.t/tot*100}%;height:100%;background:${i===0?'var(--par)':'var(--act)'};opacity:${i<st?1:0.18};border-right:1px solid var(--bg)"></div>`).join('');
  const done=ps.slice(0,st),ttft=st?ps[0].t:0,dec=done.slice(1),tpot=dec.length?dec.reduce((a,b)=>a+b.t,0)/dec.length:0,procAll=done.reduce((a,b)=>a+b.proc,0);
  $('#pdBody').innerHTML=`<div class="tokrow" style="margin:8px 0">${toks}</div><div class="mcap">${L('KV 缓存（每格 = 一个位置的 K 与 V；实心 = 本步新增）','KV cache (each cell = one position\'s K and V; filled = added this step)')}</div>${kvRow(1)}${kvRow(2)}
   <div class="mcap" style="margin-top:8px">${L('时间线（琥珀 = 预填充，蓝 = 解码）','timeline (amber = prefill, blue = decode)')}</div><div class="stack" style="height:18px">${tl}</div>
   <div class="controls mono" style="font-size:13px"><span>${L('前向次数','passes')}: ${st}/${ps.length}</span><span>${L('本步处理位置','positions this pass')}: ${lastProc}</span><span>${L('累计处理','total processed')}: ${procAll}</span><span>${L('缓存条目/层','cache entries/layer')}: ${kvN}</span><span>TTFT: ${f(ttft,2)}</span><span>TPOT: ${dec.length?f(tpot,2):'—'}</span></div>`;
  let n;if(st===0)n=LB('按“单步”开始。第一次前向计算是预填充。','Press Step to begin. The first forward pass is prefill.');
  else if(st===1)n=LB(`预填充：一次处理全部 ${D.P} 个提示位置，${D.noCache?'（不缓存）':`每层写入 ${D.P} 个 K/V，`}最后位置给出第一个 token g1。这一步的耗时就是 TTFT（不含排队）。`,`Prefill: all ${D.P} prompt positions in one pass${D.noCache?' (nothing cached)':`, writing ${D.P} K/V entries per layer`}; the last position yields the first token g1. This pass\'s time is the TTFT (excluding queueing).`);
  else n=D.noCache?LB(`解码第 ${st-1} 步（无缓存）：重新处理全部 ${lastProc} 个位置才能得到 g${st}。越往后越慢。`,`Decode step ${st-1} (no cache): reprocess all ${lastProc} positions to get g${st}. It gets slower each step.`):LB(`解码第 ${st-1} 步：只处理新位置 g${st-1}，用它的 q 对缓存中的 ${kvN} 个 K/V 做注意力，并把它的 K/V 追加进缓存，得到 g${st}。`,`Decode step ${st-1}: process only the new position g${st-1}, attend with its q over the ${kvN} cached K/V entries, append its own K/V, and produce g${st}.`);
  if(st>=ps.length)n+=LB(`完成。总时间 ${f(tot,2)} 示意单位。`,`Done. Total time ${f(tot,2)} illustrative units.`);
  $('#pdNarr').innerHTML=n;save()}
INIT.push(()=>{const re=()=>{pdStop();S.pd.step=0;renderPD()};
  $('#pdP').oninput=e=>{S.pd.P=+e.target.value;re()};$('#pdG').oninput=e=>{S.pd.G=+e.target.value;re()};$('#pdNoCache').onchange=e=>{S.pd.noCache=e.target.checked;re()};
  $('#pdReset').onclick=re;$('#pdBack').onclick=()=>{pdStop();S.pd.step=Math.max(0,S.pd.step-1);renderPD()};$('#pdStep').onclick=()=>{pdStop();S.pd.step=Math.min(S.pd.G,S.pd.step+1);renderPD()};
  $('#pdSpeed').onchange=e=>{S.pd.speed=+e.target.value;save()};
  $('#pdPlay').onclick=()=>{if(pdTimer){pdStop();return}if(S.pd.step>=S.pd.G)S.pd.step=0;renderPD();pdTimer=setInterval(()=>{if(S.pd.step>=S.pd.G){pdStop();return}S.pd.step++;renderPD();if(S.pd.step>=S.pd.G)pdStop()},1200/S.pd.speed);$('#pdPlay').innerHTML=L('⏸ 暂停','⏸ Pause')};
  pdStop();renderPD()});

/* ===== Lab 7.5: memory estimator ===== */
const MEMP={l38:['Llama 3.1 8B',8.03,32,8,128],l27:['Llama 2 7B',6.74,32,32,128],l370:['Llama 3.1 70B',70.55,80,8,128],l213:['Llama 2 13B',13.02,40,40,128]};
regDef('mem',{P:8.03,L:32,kv:8,hd:128,wb:2,kb:2,ctx:8192,conc:8,oh:2});
function renderMem(){const M=S.mem;
  if(!$('#memCtrl').children.length){
    $('#memPresets').innerHTML=Object.entries(MEMP).map(([k,p])=>`<button class="btn" data-memp="${k}">${p[0]}</button>`).join('');
    $$('[data-memp]').forEach(b=>b.onclick=()=>{const p=MEMP[b.dataset.memp];Object.assign(S.mem,{P:p[1],L:p[2],kv:p[3],hd:p[4]});renderMem()});
    const num=(k,lab,step)=>`<label for="mem-${k}">${lab}</label><input class="nb" type="number" min="0" step="${step}" id="mem-${k}" data-mem="${k}" style="width:7em">`;
    $('#memCtrl').innerHTML=num('P',L('参数量（十亿）','parameters (billions)'),0.01)+num('L',L('层数','layers'),1)+num('kv',L('KV 头数','KV heads'),1)+num('hd',L('头维度','head dim'),1)+
     `<label>${L('权重精度','weight precision')}</label><select class="btn" id="memWb"><option value="4">FP32</option><option value="2">BF16/FP16</option><option value="1">INT8/FP8</option><option value="0.5625" data-zh="INT4（约 4.5 位）" data-en="INT4 (~4.5 bit)"></option></select>`+
     `<label>${L('KV 精度','KV precision')}</label><select class="btn" id="memKb"><option value="2">BF16/FP16</option><option value="1">FP8/INT8</option></select>`+
     `<label for="memCtx">${L('上下文长度（token/请求）','context length (tokens/request)')}</label><span><input type="range" id="memCtx" min="10" max="17" step="1" style="width:140px"> <output class="mono" id="memCtxO"></output></span>`+
     `<label for="memConc">${L('并发请求数','concurrent requests')}</label><span><input type="range" id="memConc" min="1" max="128" step="1" style="width:140px"> <output class="mono" id="memConcO"></output></span>`+
     num('oh',L('其他开销（GiB）','other overhead (GiB)'),0.5);
    $$('[data-mem]').forEach(i=>i.oninput=()=>{const v=parseFloat(i.value);if(v>=0){S.mem[i.dataset.mem]=v;renderMem()}});
    $('#memWb').onchange=e=>{S.mem.wb=+e.target.value;renderMem()};$('#memKb').onchange=e=>{S.mem.kb=+e.target.value;renderMem()};
    $('#memCtx').oninput=e=>{S.mem.ctx=2**+e.target.value;renderMem()};$('#memConc').oninput=e=>{S.mem.conc=+e.target.value;renderMem()}}
  $$('[data-mem]').forEach(i=>{if(document.activeElement!==i)i.value=M[i.dataset.mem]});$('#memWb').value=M.wb;$('#memKb').value=M.kb;
  $('#memCtx').value=Math.round(Math.log2(M.ctx));$('#memCtxO').textContent=M.ctx.toLocaleString();$('#memConc').value=M.conc;$('#memConcO').textContent=M.conc;
  const w=M.P*1e9*M.wb/GIB,per=2*M.L*M.kv*M.hd*M.kb,kv=per*M.ctx*M.conc/GIB,tot=w+kv+M.oh;
  $('#memStack').innerHTML=[[w,'var(--par)'],[kv,'var(--act)'],[M.oh,'var(--c2)']].map(([v,c])=>`<i style="width:${v/tot*100}%;background:${c}"></i>`).join('');
  const fit=c=>tot<=c?`<span class="ok">✓ ${c} GiB</span>`:`<span class="bad">✗ ${c} GiB</span>`;
  $('#memOut').innerHTML=`${L('权重','weights')}: <b>${f(w,2)}</b> GiB<br>KV: ${L('每 token','per token')} ${per>=2**20?f(per/2**20,3)+' MiB':f(per/1024,1)+' KiB'} × ${M.ctx.toLocaleString()} × ${M.conc} = <b>${f(kv,2)}</b> GiB<br>${L('其他','other')}: <b>${f(M.oh,2)}</b> GiB<br><span class="big">${L('合计','total')} ≈ ${f(tot,2)} GiB</span> (${f(tot*GIB/1e9,1)} GB)<br>${fit(24)} · ${fit(48)} · ${fit(80)} · ${fit(160)} <span style="color:var(--muted)">(${L('单卡容量参照；160 = 两张 80','single-GPU reference; 160 = two 80s')})</span>`;save()}
INIT.push(renderMem);


/* ===== Lab 8.1: request pipeline ===== */
// [zh title, en title, place, chapter, zh detail, en detail, memory flags {text,ids,act,kv,logits,out}]
const RQ=[
 ['请求到达','Request arrives','CPU','c76','API 服务收到 HTTP 请求：JSON 中有消息列表、temperature、max_tokens 等。此时只有文字，没有任何模型计算。','The API server receives an HTTP request: JSON with the message list, temperature, max_tokens and so on. Only text exists; no model computation yet.',{text:1}],
 ['调度与排队','Scheduling and queueing','CPU','c75','引擎的调度器检查是否有空闲的批次位置和足够的 KV 显存。若没有，请求排队等待；排队时间计入首 token 延迟。连续批处理（D7）允许它在下一个解码步加入。','The engine scheduler checks for a free batch slot and enough KV memory. If not, the request waits; queueing counts toward time to first token. Continuous batching (D7) lets it join at the next decode step.',{text:1}],
 ['对话模板与分词','Chat template and tokenization','CPU','c41','消息列表按模型的对话模板拼成带特殊 token 的文本，再由分词器变成约 30 个 token ID。这些整数被送到 GPU。','The message list is formatted with the model\'s chat template (adding special tokens), then the tokenizer turns it into about 30 token IDs. These integers are sent to the GPU.',{text:1,ids:1}],
 ['嵌入查表','Embedding lookup','GPU','c42','每个 ID 取嵌入表 [128256, 4096] 的一行，得到激活值 X₀ [30, 4096]。嵌入表是参数，一直驻留在显存中。','Each ID fetches one row of the embedding table [128256, 4096], giving activations X₀ [30, 4096]. The table is a parameter, resident in GPU memory.',{ids:1,act:1}],
 ['预填充','Prefill','GPU','c74','30 个位置一起通过 32 个块：每块读取自己的权重，算注意力与 MLP，并把 30 个位置的 K、V 写进该层的 KV 缓存（每 token 128 KiB，共约 3.8 MiB）。中间激活值逐层使用后丢弃。','All 30 positions pass through 32 blocks together: each block reads its own weights, computes attention and the MLP, and writes the 30 positions\' K and V into its layer\'s KV cache (128 KiB per token, about 3.8 MiB total). Intermediate activations are discarded layer by layer.',{act:1,kv:1}],
 ['logits 与采样','Logits and sampling','GPU','c66','只取最后一个位置：最终 RMSNorm → 输出矩阵 [4096, 128256] → logits [128256] → 温度、top-p 等 → 选出第一个 token。','Only the last position: final RMSNorm → output matrix [4096, 128256] → logits [128256] → temperature, top-p, etc. → the first token is chosen.',{kv:1,logits:1}],
 ['反分词并流式发送','Detokenize and stream','CPU','c67','token ID 被解码为文字片段，通过 SSE 发给客户端。用户看到第一个字：首 token 延迟到此结束。','The token ID is decoded into a text piece and sent to the client via SSE. The user sees the first text: time to first token ends here.',{kv:1,out:1}],
 ['解码循环','Decode loop','GPU','c73','重复约 49 次：新 token 嵌入 → 32 个块（只处理这一个位置，读全部权重与 KV 缓存，追加新的 K/V）→ logits → 采样 → 检查停止条件 → 流式发送。每步可能与其他请求组成一个批次。KV 缓存从 30 增长到约 80 个位置。','Repeated about 49 times: embed the new token → 32 blocks (processing only this position, reading all weights and the KV cache, appending new K/V) → logits → sample → check stop conditions → stream. Each step may be batched with other requests. The KV cache grows from 30 to about 80 positions.',{kv:2,act:1,logits:1,out:1}],
 ['结束与释放','Finish and release','CPU / GPU','c67','采到轮次结束 token（或达到 max_tokens）。KV 缓存被释放，返回用量统计（提示 token 数、生成 token 数）。参数从头到尾未被修改，立即服务下一个请求。','The end-of-turn token is sampled (or max_tokens is reached). The KV cache is freed and usage (prompt and completion tokens) is reported. Parameters were never modified and serve the next request immediately.',{out:1}]];
regDef('rq',{step:0,speed:1});
let rqTimer=null;
function rqStop(){if(rqTimer){clearInterval(rqTimer);rqTimer=null}$('#rqPlay').innerHTML=L('▶ 自动播放','▶ Play')}
function renderRQ(){const R=S.rq,st=R.step,s=RQ[st];$('#rqSpeed').value=R.speed;$('#rqBack').disabled=st===0;$('#rqNext').disabled=st===RQ.length-1;
  $('#rqFlow').innerHTML=RQ.map((r,i)=>`<button class="fbox ${i===st?'on':''}" data-rq="${i}" style="${i<st?'opacity:.75':''}">${i+1}. ${L(r[0],r[1])}<small>${r[2]}</small></button>${i<RQ.length-1?'<span class="farrow">→</span>':''}`).join('');
  $$('[data-rq]').forEach(b=>b.onclick=()=>{rqStop();S.rq.step=+b.dataset.rq;renderRQ()});
  $('#rqInfo').innerHTML=`<b>${st+1}. ${L(s[0],s[1])}</b> <span class="pill">${s[2]}</span>${LB(s[4],s[5])}<a href="#${s[3]}">${L('回到讲解','Back to the explanation')} (${SEC[s[3]][2]}) →</a>`;
  const m=s[6],item=(on,zh,en,cls,extra='')=>`<div style="border:1px solid ${on?'var(--'+cls+')':'var(--line)'};border-radius:6px;padding:4px 8px;margin:4px 0;font-size:13px;${on?'':'opacity:.35'}">${L(zh,en)}${extra}</div>`;
  $('#rqMem').innerHTML=`<div class="mcap">CPU RAM</div>${item(m.text,'请求文本','request text','fg')}${item(m.ids,'token ID','token IDs','act')}${item(m.out,'已发送的文字','streamed text','fg')}
   <div class="mcap" style="margin-top:8px">GPU ${L('显存','memory')}</div>${item(1,'权重（约 15 GiB，只读，始终驻留）','weights (≈15 GiB, read-only, always resident)','par')}${item(m.kv,'KV 缓存','KV cache','act',m.kv?` · ${m.kv===2?L('增长至约 80 位置 ≈ 10 MiB','growing to ~80 positions ≈ 10 MiB'):L('30 位置 ≈ 3.8 MiB','30 positions ≈ 3.8 MiB')}`:'')}${item(m.act,'激活值（临时）','activations (temporary)','act')}${item(m.logits,'logits [128256]','logits [128256]','act')}`;save()}
INIT.push(()=>{$('#rqReset').onclick=()=>{rqStop();S.rq.step=0;renderRQ()};$('#rqBack').onclick=()=>{rqStop();S.rq.step=Math.max(0,S.rq.step-1);renderRQ()};$('#rqNext').onclick=()=>{rqStop();S.rq.step=Math.min(RQ.length-1,S.rq.step+1);renderRQ()};
  $('#rqSpeed').onchange=e=>{S.rq.speed=+e.target.value;save()};
  $('#rqPlay').onclick=()=>{if(rqTimer){rqStop();return}if(S.rq.step>=RQ.length-1)S.rq.step=0;renderRQ();rqTimer=setInterval(()=>{if(S.rq.step>=RQ.length-1){rqStop();return}S.rq.step++;renderRQ();if(S.rq.step>=RQ.length-1)rqStop()},2200/S.rq.speed);$('#rqPlay').innerHTML=L('⏸ 暂停','⏸ Pause')};
  rqStop();renderRQ()});


try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',redrawAll)}catch(e){}
new MutationObserver(redrawAll).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
let rzT;const rz=()=>{clearTimeout(rzT);rzT=setTimeout(redrawAll,80)};addEventListener('resize',rz);try{const ro=new ResizeObserver(rz);$$('canvas').forEach(c=>ro.observe(c))}catch(e){}
INIT.forEach(fn=>{try{fn()}catch(e){console.error(e)}});renderProgress();
(()=>{const h=(location.hash||'').slice(1);const v=viewOf(h);
  setMode(S.mode,false);
  if(v){setView(v,h)}else setView(S.view||'map');
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(redrawAll)})();
